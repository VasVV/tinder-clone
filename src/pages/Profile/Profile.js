import Header from "../../components/Header/Header";

const Profile = () => {
  <>
    <Header />
    <div className='profile'>
      <div className='photo'>Photo</div>
      <div className='name'>Name</div>
      <div className='location'>Location</div>
      <div className='email'>Email</div>
      <div className='password'>Password</div>
      <div className='age'>Age</div>
    </div>
  </>;
};

export default Profile;
