import React, { useState } from 'react'
import Avatar from '../Avatar';
import { styles } from '../styles'
import { LoadingOutlined} from '@ant-design/icons';

// import 'antd/dist/antd.css';
const EmailForm = (props) => {


    const [email,setEmail]= useState('');
    const [loading,setLoading] = useState(false);
    function handleSubmit(event){
      event.preventDefault();
      setLoading(true);
      console.log('email',email);
    }


  return (
    <div 
    style={{
      ...styles.emailFormWindow,
      ...{height: '100%', opacity: '1'}
    }}
    >

       <div style={{ height:'0px'}}>
        <div  style={styles.stripe}/>
        </div> 

      <div 
        className='transition-5'
        style={{
          ...styles.loadingDiv,
          ...{opacity: loading ? '0.33' : 0 ,zIndex: loading ? 10:-1}
        }}
      />
      <LoadingOutlined 
      className='transition-3'
      style={{
        ...styles.loadingIcon,
        ...{
          opacity: loading ? 1 : 0 ,
          zIndex: loading ? 10 : -1,
          fontSize:'82px',
        }
      }}
      />

      <div  style={{position:'absolute',height:'100%',width:'100%',textAlign:'center'}}>

        <Avatar 
          style={{
            position:'relative',
            left:'calc(50% - 44px)',
            top:'10%',

          }}
        />
        
          <div style={styles.topText}>
            Welcome to my <br/> support 
          </div>

          <form
          onSubmit={(e) => handleSubmit(e)}
          style={{position:'relative',height:'100%',top:'19.75%'}}

          
          >
          <input 
          style={styles.emailInput}
          onChange={(e) => setEmail(e.target.value) }
          placeholder="Your Email"
          />

          </form>
          <div style={styles.bottomText}>
            Enter your email address <br/> to get Started!
         </div>      
      
</div>
    </div>
  )
}

export default EmailForm