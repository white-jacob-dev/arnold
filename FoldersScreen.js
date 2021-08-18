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
  const theme = useTheme();

  const PlusIcon = (props) => <Icon {...props} name="plus-circle-outline" />;
  const FolderIcon = (props) => <Icon {...props} name="folder" />;
  const EditIcon = (props) => (
    <Icon {...props} name="edit-2-outline" fill="#d3d3d3" />
  );
  const RedFolderIcon = (props) => (
    <Icon {...props} name="folder" fill={theme["color-primary-default"]} />
  );

  const PlusAction = () => <TopNavigationAction icon={PlusIcon} />;

  const title = (props) => <Text category="h6">Your Folders</Text>;

  const data = new Array(8).fill({
    title: "Title for Item",
    description: "Description for Item",
  });

  const navigate = () => {
    navigation.navigate("Library");
  };

  const editButton = (props) => (
    <Button
      {...props}
      appearance="ghost"
      accessoryLeft={EditIcon}
      onPress={navigate}
    />
  );

  const renderItem = ({ item, index }) => (
    <ListItem
      style={styles.listItem}
      title={index == 0 ? "Favorites" : `${item.title} ${index + 1}`}
      description={index == 0 ? "" : `${item.description} ${index + 1}`}
      accessoryLeft={index == 0 ? RedFolderIcon : FolderIcon}
      accessoryRight={editButton}
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
  listItem: {
    width: "90%",
    alignSelf: "center",
    marginBottom: "2%",
    marginTop: "2%",
  },
  topNav: {
    zIndex: 2,
    shadowColor: "black",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 8 },
    shadowRadius: 5,
  },
});

export default FoldersScreen;
