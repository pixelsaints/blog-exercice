import React from 'react';
import Moment from 'react-moment';

const Card = (props) => {
  return (
    <div className="col-lg-4 col-md-6 col-12">
      <div className="post">
        <div className="post-thumb">
          <img src={props.post.featured_image_url} className="mw-100" alt={props.post.title.rendered} />
        </div>
        <div className="post-content">
          <h2 className="post-content-title">
            {props.post.title.rendered}
          </h2>
          <div className="post-content-desc" dangerouslySetInnerHTML={{ __html: props.post.title.rendered }} />
          <div className="post-content-meta d-flex">
            <span className="category">{props.post.categories[0].category_name}</span>
            <span className="time ml-auto"><Moment format="DD/MM/YYYY">{props.post.date}</Moment></span>
            <span className="author">{props.post.author_meta.display_name}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card;