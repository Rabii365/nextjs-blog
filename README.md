# NextJS Blog

Welcome to my blog website built with Next.js! This website showcases blog posts, which cover various topics ranging in technology. Feel free to explore, read, and engage with the content.

## Features

- **Homepage**: The homepage features selected blog posts that are considered featured.
- **Posts Page**: This page displays all the blog posts in chronological order, allowing users to browse through the entire collection.
- **Post Detail Page**: Each blog post has its own detail page where users can read the full content. The content is rendered using React-Markdown for a seamless reading experience.
- **Contact Page**: Users can reach out to me directly through the contact page. They can submit messages along with their name and email address.
- **Message Storage**: Messages sent through the contact page are saved using MongoDB Atlas, ensuring that I can keep track of and respond to inquiries effectively.

## Technologies Used

- **Next.js**: The website is built using Next.js, a React framework for building server-side rendered and statically generated web applications.
- **React-Markdown**: This library is used to render Markdown content, allowing for easy creation and formatting of blog posts.
- **MongoDB Atlas**: MongoDB Atlas is used to store and manage messages submitted through the contact page, providing a reliable and scalable database solution.

## Getting Started

To run this project locally, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Run `npm install` to install the dependencies.
4. Set up MongoDB Atlas and obtain your connection string.
5. Create a `.env` file in the root directory and add your MongoDB connection string as `MONGODB_URI`.
6. Run `npm run dev` to start the development server.
7. Open your browser and navigate to `http://localhost:3000` to view the website.

## Live Site

You can also visit the live site on [Vercel](https://nextjs-blog-hazel-eight-17.vercel.app/).
