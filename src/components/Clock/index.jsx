import useClock from '../../hooks/useClock';


function Clock() {
  const { timeString } = useClock();

  return (
    <div>{timeString}</div>
  )
}

Clock.propTypes = {

}

export default Clock

