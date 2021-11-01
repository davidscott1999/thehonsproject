const Cards = () => (
  <ul className="a-list-plain l-columns [ Modifiers ]">
    <li className="l-columns__column m-card [ Modifiers ]">
      <div className="m-card-image">
        <picture>
          <source
            type="image/webp"
            media="(min-width: 560px)"
            srcset="..."
            width="..."
            height="..."
          />
          ...
          <source type="image/webp" srcset="public/" width="..." height="..." />
          <img src="..." decoding="async" width="..." height="..." alt="" />
        </picture>
      </div>
      <div className="m-card-content">
        <div className="m-card-content__inner">
          <p className="m-card-tagline">...</p>
          <h2 className="a-heading a-heading--2 a-heading--semibold">...</h2>
          <p>...</p>
        </div>
        <div className="m-card-content__inner m-card-content__inner--bottom">
          <p className="m-card-readmore">
            <a
              className="a-button a-button--tertiary a-button--tertiary-shallow"
              href="..."
            >
              <span className="a-button__inner">
                ...<span className="u-hidden--visually">...</span>
              </span>
            </a>
          </p>
        </div>
      </div>
    </li>
  </ul>
);

export default Cards;
