import { GraphQLClient, gql } from "graphql-request";

const graphqlApi = process.env.NEXT_PUBLIC_BLOG_ENDPOINT;

export default async function comments(req, res) {
  const { name, email, comment } = req.body;
  const graphQLClient = new GraphQLClient(graphqlApi, {
    headers: {
      authorisation: `Bearer ${process.env.ACCESS_TOKEN}`,
    },
  });

  const query = gql`
    mutation CreateComment($name: String!, $email: String!, $comment: String!) {
      createComment(data: { name: $name, email: $email, comment: $comment }) {
        id
      }
    }
  `;
  try {
    const result = await graphQLClient.request(query, req.body);
    return res.status(200).send(result);
  } catch (error) {
    console.log(error);
  }
}
