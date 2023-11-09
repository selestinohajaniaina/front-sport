import React from 'react'
import Navbar from '../components/Navbar'
import CallApi from '../components/CallApi'
import SecondePage from './SecondePage';
import ThirdPage from './ThirdPage';
import FourthPage from './FourthPage';
import Footer from './Footer';

    class ErrorBoundary extends React.Component {
        constructor(props) {
        super(props);
        this.state = { hasError: false };
        }
    
        static getDerivedStateFromError(error) {
        return { hasError: true };
        }
    
        render() {
        if (this.state.hasError) {
            return <div>An error occurred.</div>;
        }
    
        return this.props.children;
        }
    }


const FirstPage = () => {
return (
    <>        
        <div className='w-full h-[100dvh] bg-cyan-950'>
            <Navbar/>
            <ErrorBoundary>
                <CallApi/>
            </ErrorBoundary>
        </div>
        <SecondePage/>
        <ThirdPage/>
        <FourthPage/>
        <Footer/>
    </>
)
}

export default FirstPage
