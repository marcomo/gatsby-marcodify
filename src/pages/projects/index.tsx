import { graphql, Link, PageProps } from 'gatsby';
import React from 'react';
import ConditionalRender from '../../components/ConditionalRender';
import Layout from '../../components/Layout';



const Index : React.FunctionComponent<PageProps<Queries.ProjectsQuery>> = ({ data }) => {
  console.log(data)
  const { projects } = data.allMarkdownRemark
  return (
    <Layout>
      <div className='flex-item'>
        <h2>Portfolio</h2>
        <h3>Projects</h3>
        <div>{
          projects.map(proj => (
            <ConditionalRender shouldRender={!!proj.node.frontmatter}>
              <Link to={"/projects/" + proj.node.frontmatter?.slug ?? ""} key={proj.node.id}>
                <h4>{ proj.node.frontmatter?.title }</h4>
              </Link>
            </ConditionalRender>
          ))
        }</div>
      </div>
    </Layout>
  );
};

export default Index;

export const query = graphql`
  query Projects {
    allMarkdownRemark(sort: [{frontmatter: {rank: ASC}}, {frontmatter: {title: ASC}}]) {
      projects: edges {
        node {
          frontmatter {
            slug
            title
          }
          id
        }
      }
    }
  }
`