import PropTypes from "prop-types";

const propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

const Textbox = ({ id, label, ...passThroughProps }) => (
  <div className="m-form-row">
    <label class="a-label" htmlfor={id}>
      {label}
    </label>
    <div class="m-form-row__content">
      <input id={id} {...passThroughProps} class="a-textbox" />
    </div>
  </div>
);

Textbox.propTypes = propTypes;

export { Textbox };
