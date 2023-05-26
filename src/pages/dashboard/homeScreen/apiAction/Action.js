import { axios } from "../../../../lib/axios";

export async function getUsersCounts() {
  try {
    const res = await axios.get(
      "/dashboardstats/count/playersSignup-thisMonth"
    );
    return res.data;
  } catch (error) {
    console.log("error>>>", error);
  }
}

// get distributer count

export async function getDistributerCounts() {
  try {
    const res = await axios.get(
      "/dashboardstats/count/distributerSignup-thisMonth"
    );
    return res.data;
  } catch (error) {
    console.log("error>>>", error);
  }
}

// get submission count
export async function getSubmissionCounts() {
  try {
    const res = await axios.get("/dashboardstats/count/contactSubmissions");
    return res.data;
  } catch (error) {
    console.log("error>>>", error);
  }
}
// get subscriber count
export async function getSubscriberCounts() {
  try {
    const res = await axios.get("/dashboardstats/count/subscribers-thisMonth");
    return res.data;
  } catch (error) {
    console.log("error>>>", error);
  }
}

// player graph

export async function getPlayerGraph() {
  try {
    const res = await axios.get("/dashboardstats/graph/players?days=50");
    const data = res.data;
    return {
      month: data.map((item) => item.month),
      count: data.map((item) => item.count),
    };
  } catch (error) {
    throw new Error(error);
  }
}
// distributer graph
export async function getDistributerGraph() {
  try {
    const res = await axios.get(
      "/api/dashboardstats/graph/distributer?days=80"
    );
    const data = res.data;
    return {
      month: data.map((item) => item.month),
      count: data.map((item) => item.count),
    };
  } catch (error) {
    throw new Error(error);
  }
}
// subscriber graph
export async function getSubscriberGraph() {
  try {
    const res = await axios.get(
      "/api/dashboardstats/graph/subscribers?days=700"
    );
    const data = res.data;
    return {
      month: data.map((item) => item.month),
      count: data.map((item) => item.count),
    };
  } catch (error) {
    throw new Error(error);
  }
}
