import Link from 'next/link';
import React from 'react';

import { Roboto,Poppins } from 'next/font/google'
const roboto = Roboto({
  weight: '900',
  subsets: ['latin']
})

const poppins = Poppins({
  weight: '400',
  subsets: ['latin']
})

export const metadata = {
  title: 'Blogs',
  description: 'All blogs are here'
}

const BlogPage = () => {

  const blogs = [
  {
    id: 1,
    title: "Top 10 Must-Have Digital Tools for Developers",
    author: "John Doe",
    date: "2026-04-01",
    tags: ["development", "tools", "productivity"],
    content: "Discover the top digital tools every developer should use to boost productivity, write cleaner code, and manage projects more efficiently in modern workflows."
  },
  {
    id: 2,
    title: "How to Choose the Best SaaS Tools for Your Business",
    author: "Sarah Khan",
    date: "2026-03-28",
    tags: ["business", "saas", "guide"],
    content: "Choosing the right SaaS tools can transform your business operations. Learn key factors to consider before investing in any software solution."
  },
  {
    id: 3,
    title: "Boost Your Workflow with Automation Tools",
    author: "Alex Smith",
    date: "2026-03-25",
    tags: ["automation", "productivity", "tools"],
    content: "Automation tools help reduce repetitive tasks and save time. Explore how you can integrate automation into your daily workflow effectively."
  },
  {
    id: 4,
    title: "UI/UX Design Trends You Should Follow in 2026",
    author: "Emily Johnson",
    date: "2026-03-20",
    tags: ["design", "uiux", "trends"],
    content: "Stay ahead in design by following the latest UI/UX trends. Learn about modern layouts, accessibility improvements, and user-centered design principles."
  }
];
  return (
    <div className={roboto.className}>
      <h2 className='text-3xl font-bold m-4'>Blogs</h2>
      {
        blogs.map(blog => <div key={blog.id}>
          <h3 className='text-4xl font-bold mb-2'>{blog.title}</h3>
          <Link href={`/blog/${blog.id}`}><i><strong className={poppins.className}>Show Details</strong></i></Link>
        </div>)
      }
    </div>
  );
};

export default BlogPage;