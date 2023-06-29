import WebDevelopment from '../../assets/img/WebDevelopment.svg';
import SocialMedia from '../../assets/img/socialmeda.png';
import Branding from '../../assets/img/Branding.png';
import digitalMarketing from '../../assets/img/digital marketing.png';
import Videography from "../../assets/img/Video.png";
import Modeling from "../../assets/img/3D modeling.png";
import socialmediabackground from "../../assets/img/socilmeidia background.PNG"
import videobackground from "../../assets/img/videography background.PNG";
import Responsive from "../../assets/img/Responsive.gif"
import Blogs from "../../assets/img/Blogs.jpg"
import DigitalMarketingServices from "../../assets/img/Digital Marketing Services.jpg"
import EmailMarketing from "../../assets/img/email marketing.jpg"
import DModeling from "../../assets/img/3D.jpg"
import branding from "../../assets/img/Branding.jpg"
import "./ServicesList.css"

export const services = [
  {
    title: 'Web Development',
    image: WebDevelopment,
    details : <div><h3>Web Development</h3><p className ="service-paragraph"><strong>Website (Static & Responsive):</strong> We design and develop modern and userfriendly websites that leave a lasting impression. Whether you need a static website for showcasing your business or a responsive website that adapts to different devices, we've got you covered</p>
                    <p className ="service-paragraph"><strong>Blogs:</strong> Our talented writers craft compelling blog content that resonates with your audience. We create informative, engaging, and SEO-friendly blogs that drive traffic to your website and establish you as a thought leader in your industry</p>
                  <img src={Responsive} alt="Responsive" className="image"  />
                  <img src={Blogs} alt="Blogs" className="image" />

                    </div>},
  {
    title: 'Digital Marketing',
    image: digitalMarketing,
    details : <div><br></br><br></br><br></br><br></br><br></br><h3>Digital Marketing</h3><p className ="service-paragraph">Digital Marketing is the process of using online channels to promote your products or services. At Creative Digital Media, we use a variety of digital marketing techniques to help our clients reach their target audience and achieve their marketing goals. Our team of experienced digital marketers can help you to develop a custom digital marketing strategy that meets your specific needs</p>
        <p className ="service-paragraph"><strong>Search Engine Optimization (SEO):</strong> Optimizing websites to improve their visibility and organic rankings in search engine results.</p>
        <p className ="service-paragraph"><strong>Email Marketing:</strong> Designing and implementing email campaigns to reach and nurture leads or engage existing customers.</p>
        <p className ="service-paragraph"><strong>Content Marketing:</strong>Creating and distributing valuable, relevant, and engaging content to attract and retain customers.</p>
        <div className="image-container">
  <img src={DigitalMarketingServices} alt="Blogs" className="image" />
  <img src={EmailMarketing} alt="Blogs" className="image" />
</div>

        
        </div>},
  {
    title: 'Social Media Management',
    image: SocialMedia,
    details :<div style={{ textAlign: 'left', backgroundImage: `url(${socialmediabackground})` }}>
      <h3>                                  Social Media Management</h3>
  
    <p className ="service-paragraph">Harness the power of social media with our expert social media marketing services. We develop effective strategies to promote your brand, increase your online visibility, and engage your target audience across various social media platforms.</p>
    <p className ="service-paragraph"><strong>Facebook & Instagram</strong> - Reels, Stories, Posts, audience engagement, Brand Promotions</p>
    <p className ="service-paragraph"><strong>LinkedIn, Twitter </strong>- Connections and Followers engagement through insightful blogs, videos, and photos</p>
    <img src={socialmediabackground} alt="Responsive" style={{ width: '300px' }} />
 
  </div>
  
  
  
  },
  {
    title: 'Branding',
    image: Branding,
    details: (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', textAlign: 'left' }}>
        <h3>Branding</h3>
        <br></br>
  <p className ="service-paragraph">1. Logo Creation</p>
  <p className ="service-paragraph">2. Visiting Cards / Business Card</p>
  <p className ="service-paragraph">3. Letterhead</p>
  <p className ="service-paragraph">4. Brochure</p>
  <p className ="service-paragraph">5. Company Profile</p>
  <p className ="service-paragraph">6. Company Presentation</p>
  <p className ="service-paragraph">7. Flyers</p>
  <p className ="service-paragraph">8. Posters</p>
  <p className ="service-paragraph">9. Social Media</p>
  <p className ="service-paragraph">10. Email Marketing</p>
  <p className ="service-paragraph">11. Packaging Designs</p>
  <p className ="service-paragraph">12. Infographics</p>
  <p className ="service-paragraph">13. Whitepapers</p>
  <p className ="service-paragraph">14. Brand Identity</p>
</div>
<div style={{ textAlign: 'left' }}>
    <img src={branding} alt="Responsive" style={{ width: '250px' }}/>
  </div>
</div>   
    ),
  
  }
  ,
  {
    title: '3D Modeling',
    image: Modeling,
    details : (
    <div><br></br><br></br><br></br><h3>3D Modeling</h3><p className ="service-paragraph"><strong>Realistic visuals:</strong> 3D models can be created to look exactly like real objects, making them ideal for use in marketing materials, product design, and video games. This can help you to create more engaging and persuasive content for your website.</p>
   <p className ="service-paragraph"><h3><strong> Efficiency: </strong></h3>3D models can be used to create prototypes and test designs, which can save time and money in the development process. This can help you to bring your products to market faster and more efficiently</p>
   <p className ="service-paragraph"><h3><strong> Creativity:</strong></h3> 3D modeling allows designers to create objects that would be impossible or difficult to create in the real world. This can help you to create unique and eye-catching content for your website that will stand out from the competition.</p>
   <img src={DModeling} alt="Responsive" style={{ width: '200px' }} />
</div>
)},
  {
    title: 'Videography and Photography',
    image: Videography,
    details :(<div><br></br><br></br><br></br><br></br><br></br><h3><strong>Videography and Photography</strong></h3><p className ="service-paragraph"><h5><strong>Product Photoshoots:</strong></h5> Our professional photographers skillfully capture your products in the best light, creating visually appealing images that enhance their appeal and entice potential customers.</p>
    <p className ="service-paragraph"><h5><strong>2D Animated Videos:</strong></h5> Engage your audience with captivating 2D animated videos. We leverage the power of animation to tell your brand's story, explain complex concepts, and deliver your message in an engaging and memorable way</p>
   <p className ="service-paragraph"><h5><strong>Video Creation:</strong></h5> From promotional videos to explainer videos, our video creation services help you effectively communicate your message. Our team handles the entire video production process, delivering high-quality videos that resonate with your target audience</p>
   <p className ="service-paragraph"><h5><strong>Head Shot:</strong></h5> Elevate your professional image online with expertly crafted head shots by our professional photographers. Make a lasting impression with captivating and high-quality images that reflect your unique personality and brand.</p>
    </div>),
 background: videobackground
 }
];
