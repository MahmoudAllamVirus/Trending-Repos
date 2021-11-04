import React from 'react'
export default
    React.memo(function PagesTitle({ title, smallUnderTitle = '', titleColor = 'cCT-dark-text', smallColor = 'cCT-gray-text' }) {
        const pagesTitleTemp = () => {
            return (
                // Page Title Holder
                <div className='pt-md-3 pt-3 px-md-4 pb-md-2 pb-2 m-0'>
                    <p className={`m-0 fCT-Regular-sE ${titleColor}`}>
                        {title}
                    </p>
                    {smallUnderTitle !== '' ?
                        <p className='mb-0 mt-2 mx-2 fCT-Regular-sD'>
                            <small className={smallColor}>{smallUnderTitle}</small>
                        </p>
                        : false}
                    <div style={{ height: "2px" }} className={`cCT-main-bg CT-underLine-title d-inline-block px-3`}></div>
                </div>
            )
        }
        return pagesTitleTemp()
    })