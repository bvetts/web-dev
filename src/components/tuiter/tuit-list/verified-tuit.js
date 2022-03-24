
const Verified = ({ver=false}) => {
if (ver===true)

  return (
    <i className="fa fa-check-circle d-inline"></i>
  );
else

   return (
     <i className="fa fa-check-circle d-none d-inline"> </i>
   );
}
export default Verified;

