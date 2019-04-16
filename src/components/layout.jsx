import React from 'react';
import '../styles/style.scss';

class Layout extends React.Component 
{
  render() 
  {
    
    const { children } = this.props;

    return (
      <section class="section">
       <div class="container">
       <main>
       	{children}
       </main>
       </div>
       </section>
    )
  }
};

export default Layout;