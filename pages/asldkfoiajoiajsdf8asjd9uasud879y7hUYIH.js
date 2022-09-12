import Head from "next/head";
import Link from "next/link";
import styles from '../styles/Home.module.css'



const url = "asldkfoiajoiajsdf8asjd9uasud879y7hUYIH";
const title = "U89u(*98Y*&y87g&7^T76887Y*(*(uhj*(U89))))";
const header1 = "HiojJIuuh*(u(*u(*u*)(U98Uhuyg567fTREDx%&4*%r)))";
const para = "KLJoiuIUIOukjuiOJiuo89U*(7UYgv67t^vbHGV6tr";



const googleURLsearch = "https://www.google.com/search?q=asldkfoiajoiajsdf8asjd9uasud879y7hUYIH&rlz=1C1CHBF_en-GBGB980GB980&oq=asldkfoiajoiajsdf8asjd9uasud879y7hUYIH&aqs=chrome..69i57j69i60.118j0j7&sourceid=chrome&ie=UTF-8";
const googleTitleSearch = "https://www.google.com/search?q=U89u%28*98Y*%26y87g%267%5ET76887Y*%28*%28uhj*%28U89%29%29%29%29&rlz=1C1CHBF_en-GBGB980GB980&sxsrf=ALiCzsZb6GBlpB6xWjaYGMHDifXisBSXEw%3A1663014468072&ei=RJYfY478A-aShbIP8ZaCqAg&ved=0ahUKEwiOroDVi5D6AhVmSUEAHXGLAIUQ4dUDCA4&uact=5&oq=U89u%28*98Y*%26y87g%267%5ET76887Y*%28*%28uhj*%28U89%29%29%29%29&gs_lcp=Cgdnd3Mtd2l6EANKBAhBGABKBAhGGABQAFgAYKUBaABwAHgAgAGQAYgBkAGSAQMwLjGYAQCgAQKgAQHAAQE&sclient=gws-wiz";
const googleHeaderSearch = "https://www.google.com/search?q=HiojJIuuh*%28u%28*u%28*u*%29%28U98Uhuyg567fTREDx%25%264*%25r%29%29%29&rlz=1C1CHBF_en-GBGB980GB980&sxsrf=ALiCzsYpJP36NLZ0ywZM_O6EoNyetXeJWA%3A1663014507621&ei=a5YfY7nJJfqWhbIPjeCimAM&ved=0ahUKEwj5qu7ni5D6AhV6S0EAHQ2wCDMQ4dUDCA4&uact=5&oq=HiojJIuuh*%28u%28*u%28*u*%29%28U98Uhuyg567fTREDx%25%264*%25r%29%29%29&gs_lcp=Cgdnd3Mtd2l6EANKBAhBGABKBAhGGABQAFgAYJcBaABwAXgAgAEAiAEAkgEAmAEAoAECoAEBwAEB&sclient=gws-wiz";
const googleParaSearch = "https://www.google.com/search?q=KLJoiuIUIOukjuiOJiuo89U*%287UYgv67t%5EvbHGV6tr&rlz=1C1CHBF_en-GBGB980GB980&sxsrf=ALiCzsaAOM6lGG3w1ODp440nT2lx9hXpbA%3A1663014549596&ei=lZYfY6GKJMiM8gK945DAAg&ved=0ahUKEwjhqPD7i5D6AhVIhlwKHb0xBCgQ4dUDCA4&uact=5&oq=KLJoiuIUIOukjuiOJiuo89U*%287UYgv67t%5EvbHGV6tr&gs_lcp=Cgdnd3Mtd2l6EANKBAhBGABKBAhGGABQAFgAYP4BaABwAHgAgAEAiAEAkgEAmAEAoAECoAEBwAEB&sclient=gws-wiz";




export default function asldkfoiajoiajsdf8asjd9uasud879y7hUYIH() {




    return (

<div className={styles.container}>

<Head>

    <title>{title}</title>
</Head>



{/* MENU: */}
<nav>

<Link href="/">
    <a>Home</a>
</Link>
</nav>

<h1>Header 1: {header1}</h1>



<p>Para: {para}</p>






<h2>Links with search results:</h2>
{/* LINKS to search results: */}
<Link href={googleURLsearch}><a target="_blank">
    URL
    </a></Link>

    <br />

    <Link href={googleTitleSearch}><a target="_blank">
        Title
        </a></Link>

<br />

<Link href={googleHeaderSearch}><a target="_blank">
    Header 1
    </a></Link>
<br />


<Link href={googleParaSearch}><a target="_blank">
    Para
    </a></Link>




    </div>);
}