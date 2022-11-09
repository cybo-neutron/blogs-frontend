import React, { useState } from "react";
import axios from "axios";
import Router, { useRouter } from "next/router";
import CreatePost from "../../components/Forms/CreatePost";

import dynamic from "next/dynamic";
const Layout = dynamic(() => import("../../components/Layout"), { ssr: false });

function create() {
  return (
    <Layout>
      <CreatePost />
    </Layout>
  );
}

export default create;
