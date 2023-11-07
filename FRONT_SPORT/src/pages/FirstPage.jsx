import React from 'react'
import Navbar from '../components/Navbar'
import CallApi from '../components/CallApi'

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
    <div className='w-full h-[100dvh] bg-cyan-950'>
        <Navbar/>
        <ErrorBoundary>
            <CallApi/>
        </ErrorBoundary>
    </div>
)
}

export default FirstPage
