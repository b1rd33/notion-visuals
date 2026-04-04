interface SlideFooterProps {
  framework: string
  slideNum: string
}

export function SlideFooter({ framework, slideNum }: SlideFooterProps) {
  return (
    <div className="slide-footer">
      <span className="framework">{framework}</span>
      <span className="slide-num">{slideNum}</span>
    </div>
  )
}
