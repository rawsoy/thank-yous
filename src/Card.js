import { forwardRef, useMemo } from 'react';
import './App.css';


const Card = forwardRef((props, ref) => {
  const { to, gift, type } = props;

  const text = useMemo(() => {
    let newText = '';

    switch (type) {
      case 'gift-virtual': {
        newText = `Thank you so much for the ${gift}! Although we were not able to celebrate together in person, it means so much to us that you thought of us on our special day. We cannot wait to use it in our new home in Israel. We hope we can celebrate together soon!`;
        break;
      }
      case 'gift-attended': {
        newText = `We are so happy that we were able to celebrate together! We really appreciate the ${gift} you got us, we cannot wait to use it in our new home. Thank you for coming to our wedding, it meant so much to have you there!`
        break;
      }
      case 'gift-attended-us': {
        newText = `We are so happy that we were able to celebrate together! We really appreciate the ${gift} you got us, we cannot wait to use it in our new home. We are so grateful and happy we could celebrate in person! It means so much to us that you were able to make the trip!`
        break;
      }
      case 'cash-virtual': {
        newText = `Thank you so much for your generous gift. Although we were not able to celebrate together in person, it means so much to us that you thought of us on our special day. We plan to use your gift to start our lives together here in Israel. We hope we can celebrate together soon!`
        break;
      }
      case 'cash-attended': {
        newText = `Thank you so much for your generous gift and for attending our wedding. We plan to use your gift to start our lives together here in Israel. Thank you for coming to our wedding, it meant so much to have you there!`;
        break;
      }
      case 'cash-attended-us': {
        newText = `Thank you so much for your generous gift and for attending our wedding. We plan to use your gift to start our lives together here in Israel. We are so grateful and happy we could celebrate together in person! It means so much to us that you were able to make the trip!`;
        break;
      }
      default: {

      }
    }

    return newText;
  }, [type, gift]);

  return (
    <div className='card-container' ref={ref}>
      <img src='/leaves.png' className='leaves' />

      <div className='text-container'>
        <span className='text left'>Dear {to}</span>

        <span className='text'>{text}</span>

        <span className="signature">- Esti and Yoni</span>
      </div>

      <img src='/leaves.png' className='leaves' style={{ transform: 'rotate(180deg)' }} />
    </div>
  )
});

export default Card;