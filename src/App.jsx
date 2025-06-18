import { Appointment } from "./components/appointment";
import { Footer } from "./components/footer";
import { Nav } from "./components/nav"
import { Poster } from "./components/poster"
import { Review } from "./components/review";
import { Service } from "./components/service-block"
import { Space } from "./components/space"
function App() {
  let arr = [{
    imgs:"https://easetemplate.com/free-website-templates/theraphy/images/service-1.jpg",title:"Physiotherapy",dis:" Our physiotherapy services are designed to help you restore mobility, reduce pain, and improve overall physical function through personalized treatment plans."
  },{
    imgs:"https://easetemplate.com/free-website-templates/theraphy/images/service-2.jpg",title:"Sport Injuries",dis:"Whether you're a professional athlete or a weekend runner, our rehabilitation program helps you recover faster and return to your sport safely."
  },{
    imgs:"https://easetemplate.com/free-website-templates/theraphy/images/service-3.jpg",title:"Rehabilitation",dis:"Our rehabilitation services focus on helping individuals regain strength, mobility, and independence after injury, surgery, or neurological conditions."
  },{
    imgs:"https://easetemplate.com/free-website-templates/theraphy/images/service-4.jpg",title:"Acupuncture",dis:"Acupuncture is a time-tested healing technique that uses fine needles to stimulate specific points on the body, promoting natural healing and pain relief."
  }];

  let doc=[{
    imgs:"WhatsApp Image 2025-06-18 at 15.07.44_7ec17950.jpg",title:"Dr.Kalimullah",dis:"Consultant Physician"
  },{
    imgs:"https://easetemplate.com/free-website-templates/theraphy/images/service-1.jpg",title:"Physiotherapy"
  },{
    imgs:"https://easetemplate.com/free-website-templates/theraphy/images/service-1.jpg",title:"Physiotherapy"
  },{
    imgs:"https://easetemplate.com/free-website-templates/theraphy/images/service-1.jpg",title:"Physiotherapy"
  },]
  return (
    <>
      <Nav />
      <Poster />
      <Space />
      <Service imag={arr} />
      <Appointment/>
      <Space />
      <Service imag={doc} />
      <Review/>
      <Footer/>
    </>
  )
}

export default App
