import React from "react";
import { StyleSheet } from "react-native";
import {
  Layout,
  Button,
  TopNavigation,
  TopNavigationAction,
  Icon,
  List,
  ListItem,
  Text,
  useTheme,
} from "@ui-kitten/components";
import { SafeAreaView } from "react-navigation";

function FoldersScreen({ navigation }) {
  const title = (props) => <Text category="h6">Your Folders</Text>;

  const PlusIcon = (props) => <Icon {...props} name="plus-circle-outline" />;
  const PlusAction = () => <TopNavigationAction icon={PlusIcon} />;
  const theme = useTheme();

  const data = new Array(8).fill({
    title: "Title for Item",
    description: "Description for Item",
  });

  const EditIcon = (props) => (
    <Icon {...props} name="edit-2-outline" fill="#d3d3d3" />
  );

  const RedFolderIcon = (props) => (
    <Icon {...props} name="folder" fill={theme["color-primary-default"]} />
  );
  const FolderIcon = (props) => <Icon {...props} name="folder" />;

  const renderItem = ({ item, index }) => (
    <ListItem
      style={styles.listItem}
      title={index == 0 ? "Favorites" : `${item.title} ${index + 1}`}
      description={index == 0 ? "" : `${item.description} ${index + 1}`}
      accessoryLeft={index == 0 ? RedFolderIcon : FolderIcon}
      accessoryRight={EditIcon}
    />
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <TopNavigation
        style={styles.topNav}
        alignment="center"
        title={title}
        accessoryRight={PlusAction}
      />

      <Layout style={styles.layout}>
        <List style={styles.container} data={data} renderItem={renderItem} />
      </Layout>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  layout: {
    flex: 1,
  },
  header: {
    marginBottom: "5%",
  },
  listItem: {
    width: "90%",
    alignSelf: "center",
    marginBottom: "2%",
    marginTop: "2%",
  },
  topNav: {
    borderBottomWidth: 1,
    borderColor: "#e8e8e8",
  },
});

export default FoldersScreen;
