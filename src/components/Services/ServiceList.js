import WebDevelopment from '../../assets/img/WebDevelopment.svg';
import SocialMedia from '../../assets/img/socialmeda.png';
import Branding from '../../assets/img/Branding.png';
import digitalMarketing from '../../assets/img/digital marketing.png';
import Videography from "../../assets/img/Video.png";
import Modeling from "../../assets/img/3D modeling.png";
import socialmediabackground from "../../assets/img/socilmeidia background.PNG"
import videobackground from "../../assets/img/videography background.PNG"

export const services = [
  {
    title: 'Web Development',
    image: WebDevelopment,
    details : <div><p><strong>Website (Static & Responsive):</strong> We design and develop modern and userfriendly websites that leave a lasting impression. Whether you need a static website for showcasing your business or a responsive website that adapts to different devices, we've got you covered</p>
                    <p><strong>Blogs:</strong> Our talented writers craft compelling blog content that resonates with your audience. We create informative, engaging, and SEO-friendly blogs that drive traffic to your website and establish you as a thought leader in your industry</p>
                    </div>},
  {
    title: 'Digital Marketing',
    image: digitalMarketing,
    details : <div><p>Digital Marketing is the process of using online channels to promote your products or services. At Creative Digital Media, we use a variety of digital marketing techniques to help our clients reach their target audience and achieve their marketing goals. Our team of experienced digital marketers can help you to develop a custom digital marketing strategy that meets your specific needs</p>
        <p><strong>Search Engine Optimization (SEO):</strong> Optimizing websites to improve their visibility and organic rankings in search engine results.</p>
        <p><strong>Email Marketing:</strong> Designing and implementing email campaigns to reach and nurture leads or engage existing customers.</p>
        <p><strong>Content Marketing:</strong>Creating and distributing valuable, relevant, and engaging content to attract and retain customers.</p>
        </div>},
  {
    title: 'Social Media Management',
    image: SocialMedia,
    details :<div style={{ textAlign: 'left', backgroundImage: `url(${socialmediabackground})` }}>
    <p><strong>Social Media Marketing:</strong></p>
    <p>Harness the power of social media with our expert social media marketing services. We develop effective strategies to promote your brand, increase your online visibility, and engage your target audience across various social media platforms.</p>
    <p><strong>Facebook & Instagram</strong> - Reels, Stories, Posts, audience engagement, Brand Promotions</p>
    <p><strong>LinkedIn, Twitter </strong>- Connections and Followers engagement through insightful blogs, videos, and photos</p>
  </div>
  
  
  
  },
  {
    title: 'Branding',
    image: Branding,
    details: (
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', textAlign: 'left' }}>
  <p>1. Logo Creation</p>
  <p>2. Visiting Cards / Business Card</p>
  <p>3. Letterhead</p>
  <p>4. Brochure</p>
  <p>5. Company Profile</p>
  <p>6. Company Presentation</p>
  <p>7. Flyers</p>
  <p>8. Posters</p>
  <p>9. Social Media</p>
  <p>10. Email Marketing</p>
  <p>11. Packaging Designs</p>
  <p>12. Infographics</p>
  <p>13. Whitepapers</p>
  <p>14. Brand Identity</p>
</div>

    ),
  
  }
  ,
  {
    title: '3D Modeling',
    image: Modeling,
    details : (
    <div><p><strong>Realistic visuals:</strong> 3D models can be created to look exactly like real objects, making them ideal for use in marketing materials, product design, and video games. This can help you to create more engaging and persuasive content for your website.</p>
   <p><strong> Efficiency: </strong>3D models can be used to create prototypes and test designs, which can save time and money in the development process. This can help you to bring your products to market faster and more efficiently</p>
   <p><strong> Creativity:</strong> 3D modeling allows designers to create objects that would be impossible or difficult to create in the real world. This can help you to create unique and eye-catching content for your website that will stand out from the competition.</p>
</div>
)},
  {
    title: 'Videography and Photography',
    image: Videography,
    details :(<div><p><strong>Product Photoshoots:</strong> Our professional photographers skillfully capture your products in the best light, creating visually appealing images that enhance their appeal and entice potential customers.</p>
    <p><strong>2D Animated Videos:</strong> Engage your audience with captivating 2D animated videos. We leverage the power of animation to tell your brand's story, explain complex concepts, and deliver your message in an engaging and memorable way</p>
   <p><strong>Video Creation:</strong> From promotional videos to explainer videos, our video creation services help you effectively communicate your message. Our team handles the entire video production process, delivering high-quality videos that resonate with your target audience</p>
 </div>),
 background: videobackground
 }
];

