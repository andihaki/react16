import React, { Component } from 'react';

//// function base HOC
// const withClassName = (WrappedComponent, className) => {
//     //...props = unknown props, untuk mengembalikan props dari tiap class (file.js)
//     return (props) => (
//         <div className={className}>            
//             <WrappedComponent {...props} />
//         </div>
//     )
// }

//// class base HOC
const withClassName = (WrappedComponent, className) => {
    //...props = unknown props, untuk mengembalikan props dari tiap class (file.js)
    return class extends Component{
        render() {
            return (
                <div className={className}>            
                    <WrappedComponent {...this.props} />
                </div>    
            );
        }
    }
}

export default withClassName;