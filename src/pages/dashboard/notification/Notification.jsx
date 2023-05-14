import React, { useState } from "react";
import { Button, Header, NotificationList } from "../../../components";
import { Images } from "../../../assets";

function Notification() {
  return (
    <div className="bg-primary min-h-screen">
      <div className="h-20">
        <Header />
      </div>
      <div className="bg-primary lg:px-6 px-2 py-6 flex justify-between ">
        <h3 className="text-textWhite font-semibold text-xl ">Notification</h3>
        <Button title="Mark all as read" bgColor="#016BE6" />
      </div>
      <div className="">
        <NotificationList
          title="New Contact Form"
          action="Submission"
          view="Click to View"
          icon={Images.sms}
        />
        <NotificationList
          title="1 Blog in draft complete it to"
          action="publish"
          view="Click to View"
          icon={Images.message}
        />
        <NotificationList
          title="New Contact Form"
          action="Submission"
          view="Click to View"
          icon={Images.sms}
        />
        <NotificationList
          title="1 Blog in draft complete it to"
          action="publish"
          view="Click to View"
          icon={Images.message}
        />
        <div className="lg:px-10 px-2 py-10">
          <Button title="Yesterday" bgColor="#FFB800" />
        </div>
        <NotificationList
          title="New Contact Form"
          action="Submission"
          view="Click to View"
          icon={Images.sms}
        />
        <NotificationList
          title="1 Blog in draft complete it to"
          action="publish"
          view="Click to View"
          icon={Images.message}
        />
        <NotificationList
          title="New Contact Form"
          action="Submission"
          view="Click to View"
          icon={Images.sms}
        />
        <NotificationList
          title="1 Blog in draft complete it to"
          action="publish"
          view="Click to View"
          icon={Images.message}
        />
      </div>
    </div>
  );
}

export { Notification };
