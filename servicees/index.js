import { request, gql } from "graphql-request";
const graphqlAPI = process.env.NEXT_PUBLIC_BLOG_ENDPOINT;

export const getPosts = async () => {
  const query = gql`
    query MyQuery {
      aboutTheApps {
        id
        steps
        about {
          text
        }
        image {
          fileName
          id
          url
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query);

  return result.aboutTheApps;
};

export const getrecentPosts = async () => {
  const query = gql`
    query MyQuery {
      featuress {
        des
        title
      }
    }
  `;
  const result = await request(graphqlAPI, query);

  return result.featuress;
};

export const getCategories = async () => {
  const query = gql`
    query GetCatgories {
      categories {
        name
        slug
      }
    }
  `;
  const result = await request(graphqlAPI, query);

  return result.categories;
};

export const getPostDetails = async (slug) => {
  const query = gql`
    query GetPostDetails($slug: String!) {
      post(where: { slug: $slug }) {
        author {
          bio
          name
          id
          image {
            url
          }
        }
        excerpt
        createdAt
        featuredPost
        featuredImage {
          url
        }
        title
        slug
        content {
          raw
        }

        categories {
          slug
          name
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query, { slug });

  return result.post;
};

export const submitComment = async (obj) => {
  const results = await fetch("/api/comments", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(obj),
  });
  return results.json();
};

export const getComments = async () => {
  const query = gql`
    query MyQuery {
      comments {
        comment
        id
        name
      }
    }
  `;
  const result = await request(graphqlAPI, query);

  return result.comments;
};

export const getAdjacentPosts = async (createdAt, slug) => {
  const query = gql`
    query GetAdjacentPosts($createdAt: DateTime!, $slug: String!) {
      next: posts(
        first: 1
        orderBy: createdAt_ASC
        where: { slug_not: $slug, AND: { createdAt_gte: $createdAt } }
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
      previous: posts(
        first: 1
        orderBy: createdAt_DESC
        where: { slug_not: $slug, AND: { createdAt_lte: $createdAt } }
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug, createdAt });

  return { next: result.next[0], previous: result.previous[0] };
};

export const getFeaturedPosts = async () => {
  const query = gql`
    query GetCategoryPost() {
      posts(where: {featuredPost: true}) {
        author {
          name
          image {
            url
          }
        }
        featuredImage {
          url
        }
        title
        slug
        createdAt
      }
    }   
  `;

  const result = await request(graphqlAPI, query);

  return result.posts;
};

export const getLinks = async () => {
  const query = gql`
    query MyQuery {
      linkss {
        playStore
        appStore
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.linkss;
};
export const getHero = async () => {
  const query = gql`
    query MyQuery {
      heroSections {
        title
        descriptions
        image {
          url
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.heroSections;
};
export const getScreenshot = async () => {
  const query = gql`
    query MyQuery {
      stepss {
        des
        image {
          url
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.stepss;
};
