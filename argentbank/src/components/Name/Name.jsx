import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { editName } from "../../slices/userSlice"
import "./name.css"
/**
 * Name and Edit Button
 * @returns {ReactElement}
 */
const Name = () => {
  const firstname = useSelector((state) => state.user.firstName)
  const lastname = useSelector((state) => state.user.lastName)
  const dispatch = useDispatch()
  return (
    <div className="name">
      <p className="name__infos">{`${firstname} ${lastname}`}</p>
      <button className="edit__button" onClick={() => dispatch(editName())} >
        Edit Name
      </button>
    </div>
  )
}

export default Name