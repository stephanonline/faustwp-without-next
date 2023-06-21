import { gql } from "@apollo/client";

export default function Component(props) {
  if (props.loading) {
    return <>Loading...</>
  }
  // Code to render Single Post template hierachy type
  return <>{props.data.page.title}</>;
}

// eslint-disable-next-line no-undef
Component.query = gql`
  query GetPageData($databaseId: ID!) {
    page(id: $databaseId, idType: DATABASE_ID) {
      title
      seo {
        title
        metaDesc
        fullHead
      }
    }
  }
`;

Component.variables = (query, ctx) => {
  const { databaseId } = query;
  return {
    databaseId,
  };
};
