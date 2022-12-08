import { graphql, Link, PageProps } from 'gatsby';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import React from 'react';
import ConditionalRender from '../../components/ConditionalRender';
import Layout from '../../components/Layout';
import * as styles from "../../stylesheets/projects.module.scss"



const Index : React.FunctionComponent<PageProps<Queries.ProjectsQuery>> = ({ data }) => {
  console.log(data)
  const { projects } = data.allMarkdownRemark
  return (
    <Layout>
      <div className='flex-item'>
        <h2>Portfolio</h2>
        <h3>Projects</h3>
        <div className={styles.projects}>{
          projects.map(proj => {
            return (
            <ConditionalRender shouldRender={!!proj.node.frontmatter} key={proj.node.id}>
              <Link to={"/projects/" + proj.node.frontmatter?.slug ?? ""}>
                <div className={proj.node.id}>
                  { 
                  proj.node.frontmatter?.thumb?.childImageSharp?.fluid
                    ? <GatsbyImage image={proj.node.frontmatter?.thumb?.childImageSharp?.fluid as any} alt="" />
                    : null
                  }
                </div>
                <h4>{ proj.node.frontmatter?.title }</h4>
                <p>{ proj.node.frontmatter?.description }</p>
              </Link>
            </ConditionalRender>
          )
                })
        }</div>
      </div>
    </Layout>
  );
};

export default Index;

// Get all projects so we can generate a list in the Projects view
export const query = graphql`
query Projects {
  allMarkdownRemark(
    filter: {id: {}, fileAbsolutePath: {regex: "/(/projects/)/"}}
    sort: [{frontmatter: {rank: ASC}}, {frontmatter: {title: ASC}}]
  ) {
    projects: edges {
      node {
        id
        frontmatter {
          slug
          title
          description
          thumb {
            childImageSharp {
              fluid: gatsbyImageData(width: 400 height: 400)
            }
          }
        }
      }
    }
  }
}
`