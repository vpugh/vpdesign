/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// const path = require("path")
// const _ = require("lodash")
// const { createFilePath } = require(`gatsby-source-filesystem`)

// exports.onCreateNode = ({ node, actions, getNode }) => {
//   const { createNodeField } = actions
//   if (node.internal.type === `MarkdownRemark`) {
//     const value = createFilePath({ node, getNode })
//     createNodeField({
//       name: `slug`,
//       node,
//       value,
//     })
//   }
// }

// exports.createPages = ({ actions, graphql }) => {
//   const { createPage } = actions

//   const postTemplate = path.resolve("src/templates/post.js")
//   const tagsTemplate = path.resolve("src/templates/tagPage.js")
//   const workTemplate = path.resolve("src/templates/work.js")
//   const blogTemplate = path.resolve("src/templates//blog-template.js")

//   return graphql(`
//     {
//       allMarkdownRemark(
//         filter: { frontmatter: { draft: { eq: false }, date: { nin: "null" } } }
//         sort: { fields: frontmatter___date, order: DESC }
//       ) {
//         edges {
//           node {
//             html
//             id
//             frontmatter {
//               path
//               title
//               date
//               tags
//             }
//           }
//           next {
//             frontmatter {
//               title
//               path
//             }
//           }
//           previous {
//             frontmatter {
//               title
//               path
//             }
//           }
//         }
//       }
//       workPages: allMarkdownRemark(
//         sort: { fields: frontmatter___role }
//         filter: { frontmatter: { client: { regex: "" } } }
//       ) {
//         edges {
//           node {
//             frontmatter {
//               title
//               path
//               client
//               github
//               draft
//               description
//               deliverable
//               role
//               project_description
//               url
//             }
//             html
//           }
//         }
//       }
//       postsRemark: allMarkdownRemark(
//         sort: { order: DESC, fields: [frontmatter___date] }
//         limit: 2000
//       ) {
//         edges {
//           node {
//             frontmatter {
//               tags
//             }
//           }
//         }
//       }
//       tagsGroup: allMarkdownRemark(limit: 2000) {
//         group(field: frontmatter___tags) {
//           fieldValue
//         }
//       }
//     }
//   `).then(res => {
//     if (res.errors) {
//       return Promise.reject(res.errors)
//     }

//     res.data.allMarkdownRemark.edges.forEach(({ node, next, previous }) => {
//       createPage({
//         path: node.frontmatter.path,
//         component: postTemplate,
//         context: {
//           next,
//           previous,
//         },
//       })
//     })

//     res.data.allMarkdownRemark.edges.forEach((_, index, postsArr) => {
//       const postsPerPage = 6
//       const totalPages = Math.ceil(postsArr.length / postsPerPage)
//       const currentPage = index + 1
//       const isFirstPage = index === 0
//       const isLastPage = currentPage === totalPages

//       !(currentPage > totalPages) &&
//         createPage({
//           path: isFirstPage ? "/blog" : `/blog/${currentPage}`,
//           component: blogTemplate,
//           context: {
//             limit: postsPerPage,
//             skip: index * postsPerPage,
//             isFirstPage,
//             isLastPage,
//             currentPage,
//             totalPages,
//           },
//         })
//     })

//     const tags = res.data.tagsGroup.group

//     tags.forEach(tag => {
//       createPage({
//         path: `/tags/${_.kebabCase(tag.fieldValue)}`,
//         component: tagsTemplate,
//         context: {
//           tag: tag.fieldValue,
//         },
//       })
//     })

//     res.data.workPages.edges.forEach(({ node }) => {
//       createPage({
//         path: node.frontmatter.path,
//         component: workTemplate,
//       })
//     })
//   })
// }
