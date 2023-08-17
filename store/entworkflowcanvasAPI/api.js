import axios from "axios"
const entworkflowcanvasAPI = axios.create({
  baseURL: "https://ent-archetype-next-42794.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return entworkflowcanvasAPI.get(`/api-docs/schema/`, {
    params: { lang: payload.lang }
  })
}
function api_v1_customer_list(payload) {
  return entworkflowcanvasAPI.get(`/api/v1/customer/`)
}
function api_v1_customer_create(payload) {
  return entworkflowcanvasAPI.post(`/api/v1/customer/`, payload.data)
}
function api_v1_customer_retrieve(payload) {
  return entworkflowcanvasAPI.get(`/api/v1/customer/${payload.id}/`)
}
function api_v1_customer_update(payload) {
  return entworkflowcanvasAPI.put(
    `/api/v1/customer/${payload.id}/`,
    payload.data
  )
}
function api_v1_customer_partial_update(payload) {
  return entworkflowcanvasAPI.patch(
    `/api/v1/customer/${payload.id}/`,
    payload.data
  )
}
function api_v1_customer_destroy(payload) {
  return entworkflowcanvasAPI.delete(`/api/v1/customer/${payload.id}/`)
}
function api_v1_login_create(payload) {
  return entworkflowcanvasAPI.post(`/api/v1/login/`, payload.data)
}
function api_v1_signup_create(payload) {
  return entworkflowcanvasAPI.post(`/api/v1/signup/`, payload.data)
}
function rest_auth_login_create(payload) {
  return entworkflowcanvasAPI.post(`/rest-auth/login/`, payload.data)
}
function rest_auth_logout_retrieve(payload) {
  return entworkflowcanvasAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(payload) {
  return entworkflowcanvasAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return entworkflowcanvasAPI.post(`/rest-auth/password/change/`, payload.data)
}
function rest_auth_password_reset_create(payload) {
  return entworkflowcanvasAPI.post(`/rest-auth/password/reset/`, payload.data)
}
function rest_auth_password_reset_confirm_create(payload) {
  return entworkflowcanvasAPI.post(
    `/rest-auth/password/reset/confirm/`,
    payload.data
  )
}
function rest_auth_registration_create(payload) {
  return entworkflowcanvasAPI.post(`/rest-auth/registration/`, payload.data)
}
function rest_auth_registration_verify_email_create(payload) {
  return entworkflowcanvasAPI.post(
    `/rest-auth/registration/verify-email/`,
    payload.data
  )
}
function rest_auth_user_retrieve(payload) {
  return entworkflowcanvasAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return entworkflowcanvasAPI.put(`/rest-auth/user/`, payload.data)
}
function rest_auth_user_partial_update(payload) {
  return entworkflowcanvasAPI.patch(`/rest-auth/user/`, payload.data)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_customer_list,
  api_v1_customer_create,
  api_v1_customer_retrieve,
  api_v1_customer_update,
  api_v1_customer_partial_update,
  api_v1_customer_destroy,
  api_v1_login_create,
  api_v1_signup_create,
  rest_auth_login_create,
  rest_auth_logout_retrieve,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
