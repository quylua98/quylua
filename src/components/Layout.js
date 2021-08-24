import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import '../assets/sass/main.scss';

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPreloaded: true,
    };
  }

  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.setState({ isPreloaded: false });
    }, 100);
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  render() {
    const { children } = this.props;
    const { isPreloaded } = this.state;
    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
                siteUrl
                description
                keywords
                ogTitle
                ogType
                ogImage
                ogUrl
              }
            }
          }
        `}
        render={data => (
          <>
            <Helmet
              title={data.site.siteMetadata.title}
              meta={[
                { name: 'description', content: data.site.siteMetadata.siteDescription },
                { name: 'keywords', content: data.site.siteMetadata.siteKeywords },
                { property: 'og:title', content: data.site.siteMetadata.ogTitle },
                { property: 'og:type', content: data.site.siteMetadata.ogType },
                { property: 'og:image', content: data.site.siteMetadata.ogImage },
                { property: 'og:url', content: data.site.siteMetadata.ogUrl },
              ]}
            >
              <html lang="en" />
              <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&amp;display=swap" rel="stylesheet" />
              <link rel="canonical" href={data.site.siteMetadata.siteUrl} />
            </Helmet>
            <div className={isPreloaded ? 'main-body is-preload' : 'main-body'}>
              {children}
            </div>
          </>
        )}
      />
    );
  }
}

export default Layout;
