import React from "react"
import { useDispatch, useSelector } from "react-redux"
import Account from "../../components/Account/Account"
import EditUserName from "../../components/EditUserName/EditUserName"
import Name from "../../components/Name/Name"
import Spinner from "../../components/Spinner/Spinner"
import { fetchUserDatas } from "../../features/user"
import PageNotFound from "../PageNotFound/PageNotFound"
import "./profile.css"

/**
 *userDashboard
 * @returns {ReactElement}
 */
const Profile = () => {
  const editName = useSelector((state) => state.user.editName)

  const token = useSelector((state) => state.auth.token)

  const status = useSelector((state) => state.user.status)

  const dispatch = useDispatch()

  if (editName === false && token !== "") {
    dispatch(fetchUserDatas(token))
  }

  return status ? (
    token === "" ? (
      <PageNotFound />
    ) : (
      <div className="userContainer">
        <div className="userContainer__header">
          <h1 className="userContainer__h1">
            Welcome back
            {!editName ? <Name /> : <EditUserName /> }
          </h1>
        </div>
        <Account amount={"$2,082.79"} /> 
        <Account amount={"$10,928.42"} />
        <Account amount={"$184.30"} />
      </div>
    )
  ) : (
    <Spinner />
  )
}

export default Profile