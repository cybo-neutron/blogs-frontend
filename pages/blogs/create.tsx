import React, { useState } from "react";
import Layout from "../../components/Layout";
import axios from "axios";
import Router, { useRouter } from "next/router";
import CreatePost from "../../components/Forms/CreatePost";

function create() {
  return (
    <Layout>
      <CreatePost />
    </Layout>
  );
}

export default create;
