import { Col, Row } from 'react-bootstrap'
import './BlogDetails.css'
import InterActions from '../InterActions/InterActions'

function BlogDetails({publicationDate, category, readingTime, authorName}) {
    return (
        <div className='bg-dark-08 fa_blogDetails-container'>
            <div className='container_custom'>
                <Row>
                    <Col lg={8} className='px-0'>
                        
                    </Col>
                    <Col lg={4} className='px-0 fa_blogDetails-right'>
                        <div className='fa_blogDetails-interactions'>
                            <InterActions liked />
                        </div>
                        <div className='fa_blogDetails'>
                            <div className='d-flex fa_flex-warp'>
                                <div className='fa_blogDetails-subcontainer'>
                                    <p className='fa_blogDetails-p text-gray-60 sub_title-125'>Publication Date</p>
                                    <p className='mb-0 sub_title-125 text-white'>{publicationDate}</p>
                                </div>
                                <div className='fa_blogDetails-subcontainer'>
                                    <p className='fa_blogDetails-p text-gray-60 sub_title-125'>Category</p>
                                    <p className='mb-0 sub_title-125 text-white'>{category}</p>
                                </div>
                                <div className='fa_blogDetails-subcontainer'>
                                    <p className='fa_blogDetails-p text-gray-60 sub_title-125'>Reading Time</p>
                                    <p className='mb-0 sub_title-125 text-white'>{readingTime}</p>
                                </div>
                                <div className='fa_blogDetails-subcontainer'>
                                    <p className='fa_blogDetails-p text-gray-60 sub_title-125'>Author Name</p>
                                    <p className='mb-0 sub_title-125 text-white'>{authorName}</p>
                                </div>
                            </div>
                            <div>
                                <p></p>
                                <div></div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default BlogDetails