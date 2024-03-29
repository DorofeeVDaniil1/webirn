import React from "react";
import styles from "@/styles/Home.module.scss";
import { useRouter } from "next/router";
import { UploadButton } from "@/components/UploadButton";
import { Menu } from "antd";
import {
  DeleteOutlined,
  FileImageOutlined,
  FileOutlined,
} from "@ant-design/icons";

export const DashboardLayout: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const router = useRouter();
  const selectedMenu = router.pathname;

  return (
    <main className={styles.dashboardContainer}>
      <div className={styles.sidebar}>
        <UploadButton />
        <Menu
          className={styles.menu}
          mode="inline"
          selectedKeys={[selectedMenu]}
          items={[
            {
              key: `/dashboard`,
              icon: <FileOutlined />,
              label: `Файлы`,
              onClick: () => router.push("/dashboard"),
            },

            {
              key: `/dashboard/form`,
              icon: <FileOutlined />,
              label: `Форма`,
              onClick: () => router.push("/dashboard/form"),
            },
          ]}
        />
      </div>

      <div className="container">{children}</div>
    </main>
  );
};
