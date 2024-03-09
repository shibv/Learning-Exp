import './App.css'
import Navbar from './components/Navbar'
import Main from './components/main/Main'
import Content from './components/Content'
import CardSection from './components/CardSection'
import VideoSection from './components/VideoSection'
import FeedBackSection from './components/FeedBackSection'
import FeedBackCard from './components/FeedBackCard'
import Footer from './components/Footer'
import BatchSection from './components/BatchSection'

function App() {

  return (
    <>
     <Main />
     <Content heading={"We Provide various kind of learning courses for you"} para={" Unlimited Acess to 100+ World Class, Courses Hands-on Projects ,And Job-Ready Certified Programs-All includes in your Subscription"} />
     <CardSection />
     <Content heading={"Why Us"} para={" At Learning We Are Committed To Providing Best Learning Experience taht Empowers You To Achieve Your Goals. Join Us Today And Embark On A Journey Of Discovery, Growth , and Success. "} />
     <VideoSection />
     <Content heading={"We Completed 1200+ Certifications Program Successfully & Counting "} para={" At Learning We Are Committed To Providing Best Learning Experience taht Empowers You To Achieve Your Goals. Join Us Today And Embark On A Journey Of Discovery, Growth , and Success. "} />
     <BatchSection />
     <FeedBackSection />
     <FeedBackCard />
     <Footer/>
    </>
  )
}

export default App
