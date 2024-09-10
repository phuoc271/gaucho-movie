import banner from '../assets/banner.jpeg';
import rating from '../assets/rating.png';
import banner2 from '../assets/banner2.jpg';
import rating2 from '../assets/rating-half.png';
import play from '../assets/play-button.png';
const Banner = () => {
  return (
    <div className='banner-all'>
      <div className='banner-mo'></div>
      <img src={banner} alt="" className='banner'/>
      <div className='banner-canchinh'>
      <div className='content'>
        <div ><p className='banner-logotitle'>GAUCHO MOVIE</p></div>
        <div ><h1 className='banner-title'>despicable me 4</h1></div>
        <div>
          <img className='rating'src={rating} alt="" />
          <img className='rating'src={rating} alt="" />
          <img className='rating'src={rating} alt="" />
          <img className='rating'src={rating} alt="" />
          <img className='rating'src={rating2} alt="" />
        </div>
        <div className='noidung'>
          <p>Kẻ Trộm Mặt Trăng 4 Tiếp nối những sự kiện trong phần ba Despicable Me 3 (2017), giờ đây Gru (Steve Carrell lồng tiếng) đã hoàn lương, hạn chế tham gia các hoạt động phi pháp. Ngoài vợ Lucy Wilde và các cô con gái nuôi Margo, Edith, Agnes, giờ đây gia đình Gru còn đón thêm thành viên mới là nhóc tì Gru Junior - con trai đầu lòng của anh. Tuy nhiên, sự an toàn của gia đình Gru nhanh chóng bị đe dọa khi kẻ thù cũ của anh là Maxime Le Mal (Will Ferrell lồng tiếng) đã trốn khỏi nhà tù, hắn lên kế hoạch trả thù và thanh toán nợ cũ với Gru. Đồng hành với Maxime còn có người yêu Valentina của gã. Do đó, Gru buộc phải đứng lên đối mặt với kẻ thù để bảo vệ gia đình và các Minions.
        Kẻ Trộm Mặt Trăng 4 Vietsub - Vietsub tại motphimchill luôn đảm bảo chất lượng phim tốt nhất, tốc độ tải phim Kẻ Trộm Mặt Trăng 4 Vietsub nhanh đem lại trải nghiệm tốt cho người dùng xem phim mới.</p>
        </div>
        <div>
        <button className='button-chitiet'>Chi tiết</button>
        <button className='button-xemphim'>Xem phim</button>
      </div>
      </div>
      <div className='image'>
        <div>
        
          <img className='banner2 ' src={banner2} alt="" />
        </div>
        <div className='banner2'>
          <img className='play' src={play} alt="" />
        </div>
      </div>
      
      </div>
    </div>
  )
}

export default Banner;
