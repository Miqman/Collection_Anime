import { gql } from "@apollo/client";

export const GET_ANIMES_LIST = gql`
  query Page($page: Int, $perPage: Int, $sort: [MediaSort]) {
    Page(page: $page, perPage: $perPage) {
      media(sort: $sort) {
        title {
          romaji
        }
        idMal
        id
        coverImage {
          large
          color
        }
        genres
        averageScore
      }
    }
  }
`;

export const GET_ANIME = gql`
  query Media($mediaId: Int) {
    Media(id: $mediaId) {
      idMal
      id
      title {
        english
        romaji
        native
      }
      description
      format
      status
      episodes
      bannerImage
      coverImage {
        large
        extraLarge
      }
      genres
      averageScore
      trailer {
        site
        thumbnail
      }
      duration
      season
      seasonYear
    }
  }
`;

export const TRENDING_ANIME = gql`
  query Page($sort: [MediaTrendSort], $perPage: Int) {
    Page(perPage: $perPage) {
      mediaTrends(sort: $sort) {
        averageScore
        media {
          title {
            romaji
          }
          id
          coverImage {
            large
          }
        }
      }
    }
  }
`;
