import React from "react"
import { graphql } from "gatsby"

const IndexPage = ({ data }) => {
    return (
        <>
        <h1>Under Construction</h1>
        <p>{data.site.title}</p>
        </>
    )
}

export default IndexPage

export const query = graphql`
    query {
        site {
            title
        }
    }
`