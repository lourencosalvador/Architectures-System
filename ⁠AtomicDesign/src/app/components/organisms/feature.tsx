type Props = {
    children?: React.Node,
    className?: string,
    image: string,
  }
  
  const Feature = (props: Props): React.Element<*> => (
    <div
      style={{ backgroundImage: `url(${props.image})` }}
      className={classnames(styles.feature, props.className)}
    >
      {props.children}
    </div>
  )
  
  Feature.defaultProps = {
    className: undefined,
    children: undefined,
    image: '',
  }