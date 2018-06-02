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
    const WithClass = class extends Component{
        render() {
            return (
                <div className={className}>            
                    <WrappedComponent ref={this.props.forwardedRef} {...this.props} />
                </div>    
            );
        }
    }

    return React.forwardRef((props, ref) => {
        return <WithClass {...props} forwardedRef={ref} />
    });
}

export default withClassName;