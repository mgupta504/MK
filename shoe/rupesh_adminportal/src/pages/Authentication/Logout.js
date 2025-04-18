import PropTypes from "prop-types"
import React, { useEffect } from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"

import { logoutUser } from "../../store/actions"
import { Token } from "../../Token";
//redux
import { useSelector, useDispatch } from "react-redux"

const Logout = props => {
  const dispatch = useDispatch()
 
  useEffect(() => {
    Token.clearStorage();
    dispatch(logoutUser(props.history))
  }, [dispatch])

  return <></>
}

Logout.propTypes = {
  history: PropTypes.object,
}

export default withRouter(Logout)
