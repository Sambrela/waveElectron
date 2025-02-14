import React from "react";
import Wave from "../../imgs/logo.png";
import Modal from "../sendModal/sendModal";
import Secur from "../../imgs/Gruppe61.png";

import WalletKeyProvider, {
  WalletKeyContext,
} from "../walletKeyContext/walletKeyContext";
import {
  MDBBtn,
  MDBIcon,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
} from "mdbreact";

const Mark = ({ color = null, width = 35 }) => {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="far"
      data-icon="check-circle"
      role="img"
      style={{ fontSize: "10px", width: width + "px" }}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      class="svg-inline--fa fa-check-circle fa-w-16 fa-2x"
    >
      <path
        fill={color || "currentColor"}
        d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z"
        class=""
      ></path>
    </svg>
  );
};

function index({ setCurrentTab }) {
  return (
    <div style={{ maxWidth: "1000px" }} className="wave-main">
      <div className="">
        <svg
          id="Group_78"
          data-name="Group 78"
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          viewBox="0 0 105.565 112.002"
        >
          <path
            id="Path_135"
            data-name="Path 135"
            d="M178.865,75.156a1.527,1.527,0,0,0-1.4-.181c-19.878,7.328-34.284,4.867-49.723-8.5a1.529,1.529,0,0,0-2,0C110.3,79.842,95.891,82.3,76.014,74.975a1.53,1.53,0,0,0-2.059,1.435c0,46.6,18.973,83.6,52.054,101.512a1.53,1.53,0,0,0,1.522-.038,102.54,102.54,0,0,0,38.353-41.268c9.049-17.536,13.636-37.793,13.636-60.206A1.529,1.529,0,0,0,178.865,75.156Zm-15.7,60.058a99.519,99.519,0,0,1-36.471,39.6C95.618,157.575,77.6,122.635,77.028,78.581c19.368,6.6,34.406,3.88,49.709-8.938,15.3,12.817,30.344,15.535,49.709,8.938C176.16,99.637,171.7,118.681,163.165,135.214Z"
            transform="translate(-73.955 -66.104)"
            fill="#fff"
          />
          <path
            id="Path_136"
            data-name="Path 136"
            d="M206.5,168.45a8.943,8.943,0,1,0-13.61,7.625L188.972,200.6a1.53,1.53,0,0,0,1.51,1.771h14.143a1.53,1.53,0,0,0,1.51-1.771l-3.928-24.515A8.945,8.945,0,0,0,206.5,168.45Zm-14.221,30.86,3.473-21.752,3.607.057,3.476,21.7Zm5.278-24.977a5.884,5.884,0,1,1,5.884-5.883A5.891,5.891,0,0,1,197.554,174.333Z"
            transform="translate(-144.771 -123.794)"
            fill="#fff"
          />
        </svg>
      </div>
      <div className="amount mb-1">Security</div>
      <div className="container mt-4">
        <div
          style={{ color: "#fff", fontSize: "12px" }}
          className="row text-left mb-4"
        >
          <div className="col-6">
            Complete the steps below to help prevent unauthorized access to your
            wallet. Add additional verification to access your funds at any
            time.
          </div>
          <div className="col-6">
            <div className="row    ">
              <div className="col-4 d-flex px-1">
                <Mark width={35} color="green" />

                <span className="ml-2"> Setup your Wallet Password</span>
              </div>
              <div className="col-4 d-flex px-1">
                <Mark width="35" color="green" />
                <span className="ml-2">Setup your Wallet Password</span>
              </div>
              {/* <div className="col-4 d-flex px-1">
                <Mark width="35" color="grey" />
                <span className="ml-2">Setup your Wallet Password</span>
              </div> */}
            </div>
          </div>
        </div>

        <div
          style={{ background: "#fff" }}
          className="row py-3 align-items-center mb-3"
        >
          <div class="col-2">
            <Mark width={50} color="green" />
          </div>
          <div style={{ fontSize: "14px" }} class="col-7 text-left px-0 ">
            <h5 style={{ color: "#000" }}>
              <b>Wallet Password </b>
            </h5>
            Your wallet password was created successfully when you created your
            wallet. Don`t tell others your password and keep sure it on the
            right pace.
          </div>

          <div class="col-3">
            <MDBBtn
              onClick={() => setCurrentTab("Settings")}
              style={{ padding: "5px 17px" }}
              className="btnMain"
            >
              Change Password
            </MDBBtn>
          </div>
        </div>
        <div
          style={{ background: "#fff" }}
          className="row py-3 align-items-center mb-3"
        >
          <div class="col-2">
            <Mark width={50} color="green" />
          </div>
          <div style={{ fontSize: "14px" }} class="col-7 text-left px-0 ">
            <h5 style={{ color: "#000" }}>
              <b>Secret Private Key Recovery Phrase </b>
            </h5>
            Your Secret Recovery Phrase is needed to recover your wallet in case
            the password is lost. Please write there 12 words down, in order and
            keep them somewhere safe offline. the secret Recovery phrase givers
            you (or anyone who has it) a way to ..
            <div style={{ color: "red", marginTop: "10px" }}>
              Never share your secret phrase
            </div>
          </div>

          <div class="col-3">
            <MDBBtn
              onClick={() => setCurrentTab("Settings")}
              style={{ padding: "5px 17px" }}
              className="btnMain"
            >
              Backup Funds
            </MDBBtn>
          </div>
        </div>
        {/* <div
          style={{ background: "#fff" }}
          className="row py-3 align-items-center mb-3"
        >
          <div class="col-2">
            <Mark width={50} color="grey" />
          </div>
          <div style={{ fontSize: "14px" }} class="col-7 text-left px-0 ">
            <h5 style={{ color: "#000" }}>
              <b>Two-Step Verification </b>
            </h5>
            Use an Authentication app, Sms Codes Two-step verification helps to
            prevent authorized access to your wallet by requiring a one-time
            password for every login attempt. Enable this to further secure your
            wallet.
          </div>

          <div class="col-3">
            <MDBBtn style={{ padding: "5px 17px" }} className="btnMain">
              Enable
            </MDBBtn>
          </div>
        </div> */}
      </div>

      <div className="transactionsList"></div>
    </div>
  );
}

export default index;
