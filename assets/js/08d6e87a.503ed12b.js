"use strict";(self.webpackChunkdeveloper_docs=self.webpackChunkdeveloper_docs||[]).push([[9070],{9624:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"internships/gsod/gsod-ideas","title":"GSoD 2024 - Improving the accessibility of the Talawa Documentation","description":"About Talawa","source":"@site/docs/internships/gsod/ideas-2024.md","sourceDirName":"internships/gsod","slug":"/internships/gsod/gsod-ideas","permalink":"/docs/internships/gsod/gsod-ideas","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/internships/gsod/ideas-2024.md","tags":[],"version":"current","frontMatter":{"id":"gsod-ideas","title":"GSoD 2024 - Improving the accessibility of the Talawa Documentation"},"sidebar":"docs","previous":{"title":"GSoD","permalink":"/docs/category/gsod"},"next":{"title":"GSoD 2022 - Revamping and restructuring the Talawa Docs","permalink":"/docs/internships/gsod/gsod-ideas-2022"}}');var s=i(4848),o=i(8453);const a={id:"gsod-ideas",title:"GSoD 2024 - Improving the accessibility of the Talawa Documentation"},r=void 0,l={},d=[{value:"About Talawa",id:"about-talawa",level:2},{value:"Introduction",id:"introduction",level:2},{value:"How we are generating documentation",id:"how-we-are-generating-documentation",level:3},{value:"Our Project&#39;s Problem",id:"our-projects-problem",level:3},{value:"Project Scope",id:"project-scope",level:3},{value:"Measuring the project&#39;s success",id:"measuring-the-projects-success",level:3},{value:"Timeline",id:"timeline",level:3},{value:"Budget",id:"budget",level:3},{value:"General Considerations",id:"general-considerations",level:3},{value:"Repository Languages and Skills",id:"repository-languages-and-skills",level:3},{value:"Ideas List",id:"ideas-list",level:2},{value:"Complete the Documentation for the <strong>Talawa</strong>, <strong>Talawa-api</strong> and <strong>Talawa Admin</strong> Repositories",id:"complete-the-documentation-for-the-talawa-talawa-api-and-talawa-admin-repositories",level:3},{value:"Create user guides for <strong>Talawa</strong> and <strong>Talawa Admin</strong>",id:"create-user-guides-for-talawa-and-talawa-admin",level:3},{value:"Create style guides <strong>Talawa</strong> and <strong>Talawa Admin</strong>",id:"create-style-guides-talawa-and-talawa-admin",level:3},{value:"Points for Interested Technical Writers",id:"points-for-interested-technical-writers",level:2}];function c(e){const t={a:"a",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"about-talawa",children:"About Talawa"}),"\n",(0,s.jsx)(t.p,{children:"Talawa is a mobile application designed to make it easier for community-based organizations to collaborate with their members, including open source projects, non-profits, social groups, and businesses. Unlike other software solutions in this space, Talawa is specifically designed to work in countries with limited technology and education resources, such as in Jamaica. Talawa is run by the Palisadoes Foundation which is an entirely decentralized organization that relies solely on volunteer participation to meet its goals."}),"\n",(0,s.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,s.jsx)(t.p,{children:"Welcome to the Talawa documentation ideas page for 2024! Thanks to our participation in the Google Season of Docs (GSoD) program previously, we significantly improved the documentation in our codebase (to put it lightly!). We are currently focused on improving the learning curve for our existing and future contributors by leveraging the insights gained from our previous participation. Our goal is to increase the user-friendliness of our main repositories through our documentation projects. To achieve this, we will begin with a discussion of the project's issues, scope, and success metrics, followed by a proposed ideas section that will include a timeline and budget."}),"\n",(0,s.jsx)(t.h3,{id:"how-we-are-generating-documentation",children:"How we are generating documentation"}),"\n",(0,s.jsx)(t.h3,{id:"our-projects-problem",children:"Our Project's Problem"}),"\n",(0,s.jsx)(t.p,{children:"Our main method of documentation creation involves the use of CI/CD pipelines to automate the process, as illustrated in the following steps:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"A GitHub Action checks whether the JavaScript/Dart files being pushed have comments of a specified form whenever a pull request is made."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"If the pull request is successful, another GitHub Action runs a command such as jsdoc or dartdoc to generate a static HTML file containing the documentation from the comments. The artifact file is then sent to the Talawa-Docs repository."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Finally, a GitHub Action collates and organizes the HTML files within a pre-specified template, creating a cohesive documentation file which is then added to the site."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"While this method was useful in consolidating information, from individual files across the three respositories, several issues became apparent that now need to be addressed, the four most pressing are:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Completing the documentation for the remaining Talawa repositories. While we were able to complete the documentation for 100% of the Talawa API, only around 70% of the Talawa Mobile Frontend and 40% of the Talawa Admin were able to be completed during this period, due the overwhelming amount files that span across the three repositories, and still need to be completed. The missing documentation needs to be prioritized and completed as soon as possible."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["To improve comprehension, we aim to incorporate more visualizations into the documentation. Through usability tests and informal interactions, we found that presenting high-level summaries and diagrams at the outset of introducing contributors to various topics was highly beneficial. Moreover, there is ",(0,s.jsx)(t.a,{href:"https://www.lesswrong.com/posts/mAdMkFqWzbJRB544m/book-review-how-learning-works#Strategies_",children:"scientific evidence"})," to support the effectiveness of this technique. This approach increases readers' confidence and enables them to establish practical expectations before delving into specific details. Following the previous point, this is in line with the ethos of the Talawa community to provide adequate resources to enable the highest possible number of interested developers to contribute to Talawa."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"We also identified a lack of documentation in describing how to do auxiliary tasks such as getting set up on different machines, troubleshooting, writing tests, as well as describing the various types of tests and the relevance of code coverage within the testing framework. To address this issue, we recommend creating separate documentation for auxiliary tasks, which will provide more clarity and help users navigate the documentation more easily."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"project-scope",children:"Project Scope"}),"\n",(0,s.jsx)(t.p,{children:"The Talawa documentation project aims to:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Establish a set of documentation standards and guidelines for the project, to ensure consistency and quality across all documentation."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Conduct a comprehensive audit of the existing documentation to identify areas where it can be improved. This includes analyzing the content, organization, and formatting of the documentation to ensure that it is accurate, clear, and easy to understand."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Introduce a review process for all new documentation, to ensure it meets the established standards and guidelines before being published."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:'Use a "friction log" to identify pain points and areas of confusion in the documentation. This log should be created from the perspective of multiple users, including both experienced contributors and new users. By doing so, we can ensure that the documentation addresses the needs of all users, regardless of their level of experience.'}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Evaluate which parts of the documentation would benefit from the addition of diagrams, illustrations, or other visual aids. This is particularly important for complex relationships, such as those involving data models, APIs, or other technical concepts."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Keep a public log of all progress and obstacles encountered during the project. This log should include a summary of any discrepancies between the expected and actual project outcomes. By doing so, we can make necessary adjustments as we move forward."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Conduct user testing and feedback sessions to gather input on the effectiveness and usability of the documentation, and use this feedback to make improvements."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Provide resources for contributors on how to effectively document their code, including best practices, tools, and examples in the form of video tutorials and how-to guides."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Ensure that all documentation is accessible to a diverse audience, including those with disabilities or who use assistive technology."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Outside of this project's scope is modifying the existing automation architecture and/or any form of testing and verification."}),"\n",(0,s.jsx)(t.h3,{id:"measuring-the-projects-success",children:"Measuring the project's success"}),"\n",(0,s.jsx)(t.p,{children:"We have implemented scripts to measure the amount of code that is documented in the form of comments files individual files, which can be parsed by documentation generating libraries such as jsdoc, dartdoc, and others. These libraries are integrated into our CI/CD pipeline for each repository. While we prioritize measuring the quantity of documentation, we also value metrics related to the accessibility and user experience of the documentation. We aim to ensure that the documentation is presented in a way that is easy to access and understand, and that it provides a high quality of life for users who rely on it."}),"\n",(0,s.jsx)(t.p,{children:"To that end, we consider the documentation to be success if it addresses the following heuristics:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Reduction in bug reports: By improving the quality of the documentation, we expect to see a reduction in bug reports related to misunderstandings or incorrect assumptions about how the code works. We are aiming for a 30% reduction."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Reduced onboarding time: We expect the improved documentation to reduce the amount of time required for new developers to get up to speed on the codebase, resulting in faster onboarding times. This can be accomplished using survey data after the programme has completed. We are aiming for a 25% increase based on the results."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Improved developer satisfaction: Clear, comprehensive documentation can help developers feel more confident and satisfied with their work. By improving documentation, we hope to increase developer satisfaction and reduce frustration or confusion caused by poorly documented code. This can be accomplished using survey data after the programme has completed. We are aiming for 40% increase in satisfaction."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Improved code maintainability: Clear, comprehensive documentation can make code easier to maintain in the long term. By improving documentation quality, we may see a reduction in technical debt and increased maintainability of the codebase."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Achieving these goals will indicate a marked improvement in documentation quality and will have a positive impact on the usability and maintainability of the code. This, in turn, will help us to better serve our users and improve the overall quality of our software."}),"\n",(0,s.jsx)(t.h3,{id:"timeline",children:"Timeline"}),"\n",(0,s.jsx)(t.p,{children:"The project itself will take around six months to complete. Once the tech writer(s) are hired, we'll spend a month getting them up to speed on the state of the documentation, the workflows we use for creating documentation and then move onto the audit and friction log with the possible mentors, and spend the remaining months focusing on creating the documentation."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Dates"}),(0,s.jsx)(t.th,{children:"Action items"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"May"}),(0,s.jsx)(t.td,{children:"Orientation"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"June-July"}),(0,s.jsx)(t.td,{children:"Audit current documentation; highlight where in the existing infrastructure would benefit from illustrations"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"August - October"}),(0,s.jsx)(t.td,{children:"Begin working on documenting Talawa"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"November"}),(0,s.jsx)(t.td,{children:"Project completion and final report due"})]})]})]}),"\n",(0,s.jsx)(t.p,{children:"This timeline, especially within the May-July period, is not strict and has some room for unforeseen circumstances that may arise. However, it is expected that you'll complete all the requiste tasks within the intervals posted and have everything completed by the November deadline."}),"\n",(0,s.jsx)(t.h3,{id:"budget",children:"Budget"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Item"}),(0,s.jsx)(t.th,{children:"Amount"}),(0,s.jsx)(t.th,{children:"Running total"}),(0,s.jsx)(t.th,{children:"Notes"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Technical Writers (x3)"}),(0,s.jsx)(t.td,{children:"2500"}),(0,s.jsx)(t.td,{children:"7500"}),(0,s.jsx)(t.td,{children:"3x stipends at $2500 each"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Volunteer Stipends"}),(0,s.jsx)(t.td,{children:"2000"}),(0,s.jsx)(t.td,{children:"9500"}),(0,s.jsx)(t.td,{children:"4x stipends at $500 each"})]})]})]}),"\n",(0,s.jsx)(t.p,{children:"Additional information"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["The Palisadoes Foundation was selected for Google Summer of Code (GSoC) in 2024, 2023, ",(0,s.jsx)(t.a,{href:"https://summerofcode.withgoogle.com/programs/2022/organizations/the-palisadoes-foundation",children:"2022"}),", and ",(0,s.jsx)(t.a,{href:"https://summerofcode.withgoogle.com/archive/2021/organizations/4835102856577024",children:"2021"})," and ",(0,s.jsx)(t.a,{href:"https://www.outreachy.org/apply/project-selection/#palisadoes-foundation",children:"Outreachy in 2023"}),". The Palisadoes Foundation was also selected for the ",(0,s.jsx)(t.a,{href:"https://externship.github.in/",children:"Github externship"})," on three separate occasions in years 2021 and 2022. The mentors have all previously been mentors of GSoC since the Palisadoes Foundation was first accepted."]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"general-considerations",children:"General Considerations"}),"\n",(0,s.jsx)(t.p,{children:"This is not an exhaustive list of ideas, but they are the ones we currently feel need the most attention."}),"\n",(0,s.jsx)(t.p,{children:"We also welcome any other ideas that we could use."}),"\n",(0,s.jsx)(t.h3,{id:"repository-languages-and-skills",children:"Repository Languages and Skills"}),"\n",(0,s.jsx)(t.p,{children:"We are looking for motivated candidates with a history of strong, demonstratable technical writing skills that can provide structure and organization to our codebases. It is not necessary to be well-versed in the tech stack being used for a given repository though some familiarity would be seen as a positive. Our mentors will provide ample support in a 'learn as you go' fashion."}),"\n",(0,s.jsx)(t.p,{children:"The following lists the primary tech stack being used for each respective repository which is helpful for the purpose of documenting each repository (but you are not required to know them):"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Talawa:"})," Flutter / Dart, GraphQL"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Talawa-API:"})," Node.js, GraphQL, MongoDB"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Talawa-Admin Portal:"})," TypeScript, Node.js"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"There are others, but these are the main ones that will guide your contributions."}),"\n",(0,s.jsx)(t.h2,{id:"ideas-list",children:"Ideas List"}),"\n",(0,s.jsx)(t.p,{children:"Here are a list of issues we'd like to address in the coming months."}),"\n",(0,s.jsxs)(t.h3,{id:"complete-the-documentation-for-the-talawa-talawa-api-and-talawa-admin-repositories",children:["Complete the Documentation for the ",(0,s.jsx)(t.strong,{children:"Talawa"}),", ",(0,s.jsx)(t.strong,{children:"Talawa-api"})," and ",(0,s.jsx)(t.strong,{children:"Talawa Admin"})," Repositories"]}),"\n",(0,s.jsx)(t.p,{children:"In the Google Season of Docs 2022, our team successfully addressed the backlog of uncommented files in the Talawa API repository. Now, our objective is to enhance the quality of documentation across all three repositories and provide proper documentation for previously undocumented files. Additionally, wherever architectural components are present, we will create flow diagrams to illustrate the entire repository\u2019s structure or explore some tools or libraries which can generate the graphical representation of repositories."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Repos to update:"})," Talawa, Talawa Admin, Talawa API."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Skills Required:"})," The ideal candidate should be familiar with Typescript and in particular Node.js. They also need to be comfortable with using Git and Github. Additionally, knowledge of TSDoC, DartDoC, JSDoC, docusaurus and understanding of the current automation of documentation is also required."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"How we measure sucess:"})," Complete documentation of all the three repositories and increased qualitative documentation."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Possible Mentors:"})," Dominic Mills (Github: DMills27), Tasneem Koushar (Github: tasneemkoushar)"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Contact details:"})," Send your CV along with at least two technical writing samples to ",(0,s.jsx)(t.img,{alt:"img",src:i(8879).A+"",width:"225",height:"20"})]}),"\n"]}),"\n",(0,s.jsxs)(t.h3,{id:"create-user-guides-for-talawa-and-talawa-admin",children:["Create user guides for ",(0,s.jsx)(t.strong,{children:"Talawa"})," and ",(0,s.jsx)(t.strong,{children:"Talawa Admin"})]}),"\n",(0,s.jsx)(t.p,{children:"Currently, there are no user guides available to help users get started and become productive within the basic ecosystems of Talawa, and Talawa Admin. Our goal is to accomplish the following (although this list is not exhaustive):"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Create user guides to help user getting started with our application, such as creating an new account, and using the various features, etc."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Interactive Tutorials: These guides go beyond the basic textual instructions and incorporate interactive elements like clickable screenshots, quizzes, FAQs or even mini-simulations within the guide itself. This makes learning engaging and reinforces understanding."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Microlearning approach: Breaks down information into bite-sized chunks that users can easily digest and complete in short bursts. This is ideal for busy users with limited time to ramp up."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"The inclusion of a few video tutorials for the user guide, that would be available on the Palisadoes Foundation Youtube channel."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Repos to update:"})," Talawa, Talawa Admin, Talawa-docs"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Skills Required:"})," The ideal candidate should have strong writing skills and be able to present samples of their technical writing. They should also be familiar with video editing software such as CapCut, photo editing software such as Adobe Photoshop and experience creating modified screenshots with an appliation such as ",(0,s.jsx)(t.a,{href:"https://app.prntscr.com/en/index.html",children:"Lightshot"}),". It's important for the technical writer to have a strong user experience (UX) of our app and needs to understand how users interact with the app."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"How we measure sucess:"})," The creation of complete tutorials and how-to guides in different forms."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Possible Mentors:"})," Dominic Mills (Github: DMills27), Tasneem Koushar (Github: tasneemkoushar)"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Contact details:"})," Send your CV along with at least two technical writing samples to ",(0,s.jsx)(t.img,{alt:"img",src:i(8879).A+"",width:"225",height:"20"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.h3,{id:"create-style-guides-talawa-and-talawa-admin",children:["Create style guides ",(0,s.jsx)(t.strong,{children:"Talawa"})," and ",(0,s.jsx)(t.strong,{children:"Talawa Admin"})]}),"\n",(0,s.jsx)(t.p,{children:"Currently, there are no style guides available to help contribute to our documentation."}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Develop visual guides and style formats for new technical writers/contributors to ensure that documentation remains organic with the codebase, up-to-date, and adheres to our standards."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Depict in detail but precise of how our automated documentation is being generated."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Develope style guide in a way so that our documentation remain consistent throughout the time."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Repos to update:"})," Talawa API, Talawa, Talawa Admin, Talawa-docs"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Skills Required:"})," The ideal candidate should have strong writing skills and be able to present samples of their technical writing. They should be aware of the documenation style of our repositories and automation of documenatation.\nTechnical writer can refer to ",(0,s.jsx)(t.a,{href:"https://google.github.io/styleguide/",children:"Google Style doc"})]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"How we measure sucess:"})," The Completion of style doc for all talawa, talawa-api, talawa-admin."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Possible Mentors:"})," Dominic Mills (Github: DMills27), Tasneem Koushar (Github: tasneemkoushar)"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Contact details:"})," Send your CV along with at least two technical writing samples to ",(0,s.jsx)(t.img,{alt:"img",src:i(8879).A+"",width:"225",height:"20"})]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"points-for-interested-technical-writers",children:"Points for Interested Technical Writers"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Developer Guide & User Guide:"})," We already have documentation ready upto 60%-70%, so now we are focussing more quality of documentation, think from the developer perspective and add what could be more useful and efficient.\nFo User guide, technical writer is free to pitch innovative ideas, but we expect it to be simpler, precise and helpful from user perspective."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Workflow:"})," We have a solid automation workflow for our documentation, working integration of libraries like TSDoC, DartDoC, Docusaurus. We expect technical writer to get familiar with these, since it will be extensively used in the project and technical writer has to make changes on top of these tools only. Don't worry if you don't have any experience with these tools, we will provide you with the necessary context and assistance to get you up and running."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Link:"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://docs.talawa.io/",children:"Current documentation"})}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://www.youtube.com/watch?v=bCyXGxzx--M&t=54s",children:"Automation of documentation"}),": There has been some changes in current flow, interested technical writers can connect with mentors to get the further details."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"New idea:"})," New ideas are welcome, but focus on having these ideas on top of exiting setup. We are adamant about not changing the existing flow of our current documentation."]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8879:(e,t,i)=>{i.d(t,{A:()=>n});const n="data:image/png;base64,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"},8453:(e,t,i)=>{i.d(t,{R:()=>a,x:()=>r});var n=i(6540);const s={},o=n.createContext(s);function a(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);