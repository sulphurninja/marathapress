import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import FeaturedBlogCard from '@/components/FeaturedBlog'
import SideBlogCard from '@/components/SideCards'
import BlogFeed from '@/components/BlogFeed'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div className="max-w-7xl mx-auto">
        <Head>
          <title>Maratha Club - वावडी (Vaavdi)</title>
          <meta charset="UTF-8" />
          <meta name="description" content="Maratha Club - Vaavdi (वावडी) Blog maratha club beed" />
          <meta name="keywords" content="Maratha Club,maratha,maratha mandir,
	
maratha matrimony,
	
maratha mandir cinema,
	
maratha marriage,
	
maratha chamber of commerce,
	
maratha caste,
	
maratha mandir photos,
	
maratha aarakshan,
	
maratha architecture,
	
maratha anand,

maratha kranti morcha,
	
maratha army,
ek maratha lakh maratha,
	
maratha aarakshan latest news,
	
maratha administration,
	
maratha architecture short note,
	
maratha art,
shivaji maharaj,
chatrapati shivaji maharaj,
	
maratha and kesari newspaper,
	
anand maratha,
	
anglo maratha war,
	
anand maratha grooms,
	
anglo maratha war upsc,
	
anand maratha bride,
	
aware maratha khanawal,
	
anand maratha divorcee brides,
	
anglo maratha war 1,
	
anglo maratha war 3,
	
angl maratha yudh,
	
maratha brides,

aurangzeb maratha,

afzal khan maratha,
	
maratha bhavan vashi,
	
maratha bio for instagram,
	
maratha bhavan sanpada,
	
maratha baloch,
	
badhe maratha,
	
baloch maratha,
	
bookmyshow maratha mandir,
	
bugti maratha,
	
badhe maratha divorcee brides,
	
british maratha war,

maharashtra,
	
bandal maratha,
	
balochistan maratha,

politics marathi maratha,
	
belgaum maratha matrimony,
	
battles involving the maratha empire,
	
maratha caste category,
	
maratha college pune,
	
maratha caste population in maharashtra,

rashtravadi, bjp, maratha, manse, shivsena,
	
carry on maratha,
	
chennai maratha,
	
carry on maratha full movie download,
	
chennai maratha mohali,
	
chennai maratha pathankot,
	
capital of maratha kingdom,
	
cast of the great maratha,
	
carry on maratha cast,
	
chennai maratha sundernagar,
	
maratha darbar,
	
maratha darbar hinjewadi,
	
maratha divorcee brides,
	
maratha darbar near me,
	
maratha dhop,
	
deokar maratha,
	
ddlj maratha mandir,
	
deokar maratha groom,

balasaheb pingle,
pingle,
dr,

	
dum pukht itc maratha,
aditya balasaheb pingle,
	
dakshin itc maratha,
	
ddlj maratha mandir show timings,
	
deokar maratha divorcee brides,
	
ddlj maratha mandir record,
	
difference between leva patil and maratha,
	
decline of maratha empire,
	
maratha empire family tree,
	
maratha empire at its peak,
	
maratha empire during shivaji,
	
maratha empire flag,
	
maratha empire kings,
	
maratha excellency menu,
	
maratha empire tree,
	
english to marathi,
	
ek maratha lakh maratha,
	
empire total war maratha,
	
end of maratha empire,
	
explain the third anglo maratha war,
	
empire total war maratha guide,
	
e nava maratha,
	
ews certificate for maratha caste,
	
emergence of maratha power,
	
empire total war maratha units,
	
maratha flag,
	
maratha flag emoji,
	
maratha family tree,
	
maratha flag png,
	
maratha font style,
	
maratha foundation,
	
maratha female warriors,
	
maratha forts,
	
first anglo maratha war,
	
founder of maratha empire,
raigad, sinjgad,

96k maratha,
96 kuli maratha,
	
first anglo maratha war upsc Maratha, Maratha Press, News, Maratha Club Press, Vaavdi, Blog, Marathi, Marathi News, Vichaar, Beed, Jai Shivaji, Jai shivrai, Jai jijau"/>
          <meta name="author" content="Dr.Balasaheb Pingle" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
        <Navbar />
        
        <div className='md:flex mt-8  '>
          <div className='absolute '>
            <h1 className='px-8 md:-mt-4 -mt-4 text-[#000000] font-bold text-3xl font-nice '>Featured Post</h1>
          </div>
          <div className='md:flex gap-x-16 pt-2'>
            <FeaturedBlogCard />

            <SideBlogCard />
          </div>
          <section className='w-[100%] h-full absolute md:mt-[70%]  lg:mt-[45%] mt-[5%]  '>
            <h1 className='text-black font-bold text-center text-4xl pb-8 font-nice'>
              All Posts
            </h1>
            <BlogFeed />

            <Footer />


          </section>

        </div>
      </div>
    </>
  )
}
