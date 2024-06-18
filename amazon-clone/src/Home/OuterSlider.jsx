import ImageSlider from "./ImageSlider";

function OuterSlider() {
  const slides = [
    {
      url: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/June/GW/light_unrec._CB554785944_.jpg",
      title: "Philips",
    },
    {
      url: "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Beauty/GW/revised/final/Makeup-PCq._CB561353936_.jpg",
      title: "Makeup",
    },
    {
      url: "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Consumables/X-GL/Feb5/PC_Hero_1_3000._CB582457311_.jpg",
      title: "Daily needs",
    },
    {
      url: "https://images-eu.ssl-images-amazon.com/images/G/31/img22/march/brands/GW/Under_1499_Tallhero_3000x1200._CB561212093_.jpg",
      title: "Electronics",
    },
    {
      url: "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/devjyoti/GW/Uber/Nov/D103625178_DesktopTallHero_3000x1200_V3._CB558389732_.jpg",
      title: "Smartphones",
    },
  ];
  const containerStyles = {
    width: "99vw",
    height: "100vh",
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: "1500px",
  };
  return (
    <div>
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
    </div>
  );
}

export default OuterSlider;
