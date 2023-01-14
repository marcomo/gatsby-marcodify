---
title: Vadio Channelmaker
h1: Vadio Channelmaker
description: A React/Redux web app for building custom music video playlists.
slug: vadio-channel-maker
company: Vadio
role: ['UX Designer', 'Frontend Developer']
rank: 3
thumb: ../../images/vadio/channelmaker/vadio_channelmaker_thumb.jpg
images:
  [
    ../../images/vadio/channelmaker/images/add_to_playlist.png,
    ../../images/vadio/channelmaker/images/get_video_from_url_result_item_edit.png,
    ../../images/vadio/channelmaker/images/get_video_from_url_results.png,
    ../../images/vadio/channelmaker/images/get_video_from_url.png,
    ../../images/vadio/channelmaker/images/playlist_ad_break_insert.png,
    ../../images/vadio/channelmaker/images/playlist_ad_break_item.png,
    ../../images/vadio/channelmaker/images/playlist_insert_item_2.png,
    ../../images/vadio/channelmaker/images/playlist_item_edit_2.png,
    ../../images/vadio/channelmaker/images/playlist_item_edit_3.png,
    ../../images/vadio/channelmaker/images/playlist_item_edit_4.png,
    ../../images/vadio/channelmaker/images/playlist_item_edit_w_search.png,
    ../../images/vadio/channelmaker/images/playlist_item_edit.png,
    ../../images/vadio/channelmaker/images/playlist_multi_select.png,
    ../../images/vadio/channelmaker/images/playlist_new_item.png,
    ../../images/vadio/channelmaker/images/related_items.png,
    ../../images/vadio/channelmaker/images/search_input_2.png,
    ../../images/vadio/channelmaker/images/search_input.png,
    ../../images/vadio/channelmaker/images/search_result_item_edit.png,
    ../../images/vadio/channelmaker/images/search_results_add_all.png,
    ../../images/vadio/channelmaker/images/search_results.png,
    ../../images/vadio/channelmaker/images/settings_1.png,
    ../../images/vadio/channelmaker/images/settings_2.png,
    ../../images/vadio/channelmaker/images/trending_item_edit_2.png,
    ../../images/vadio/channelmaker/images/trending_item_edit.png,
    ../../images/vadio/channelmaker/images/trending_item_selected_2.png,
    ../../images/vadio/channelmaker/images/trending_item_selected_3.png,
    ../../images/vadio/channelmaker/images/trending_selected_item.png,
    ../../images/vadio/channelmaker/images/upload_from_csv_explorer.png,
    ../../images/vadio/channelmaker/images/upload_from_csv_file_shorter.png,
    ../../images/vadio/channelmaker/images/upload_from_csv_file.png,
    ../../images/vadio/channelmaker/images/upload_from_csv_input.png,
  ]
---

ChannelMaker provides a way for Vadio partners to generate custom playlists of music videos which are played through an embedded player. The React app integrates Vadio APIs for searching videos by artist and title, making recommendations, uploading playlists, and saving playlist drafts.

![vadio channel maker add to playlist](../../images/vadio/channelmaker/add_to_playlist.png)
![vadio channel maker get video from url result item edit](../../images/vadio/channelmaker/get_video_from_url_result_item_edit.png)
![vadio channel maker get video from url results](../../images/vadio/channelmaker/get_video_from_url_results.png)

The Trending Panel pulls top watched videos from our Analytics API and filters by videos that can be advertised against. This gives partners the best shot at engaging users.

The Related Panel, displays recommended videos based on the users playlist item selection. When no items are selected, the Trending Panel reappears.

The Playlist and Results have an inline embedded player so that users can quickly view and edit a video.

The Inline Adding feature gives users control over ad placement, deciding where ads a placed and how long they will be. The feature also allows the user to add a selected video from Results, Related, or Trending panels to a specific spot in the playlist.

The Settings Panel provides the user more options for ads and playback behavior. The user can relinquish ad placement control to the video player which injects ads at a desired ratio. If the user wants to control the ads in the playlist, they have an autofill tool which will populate the playlist with :30 seconds ads at a given ratio.
