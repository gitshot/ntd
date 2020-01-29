import React from 'react'
import PropTypes from 'prop-types'

const Footer = ({ copyrights }) => (
  <footer>
    {copyrights ? (
      <div
        dangerouslySetInnerHTML={{
          __html: copyrights,
        }}
      />
    ) : (
        <>
          <span className="footerCopyrights">
            © 2020 All right reserved <a href="https://newtodesign.org">NewToDesign</a>
          </span>

        </>
      )}
  </footer>
)

Footer.propTypes = {
  copyrights: PropTypes.string,
}

export default Footer
