
import React, { useState, useEffect } from 'react';
import fetchGroups from '../integration/GroupsDAO';

const GroupsPresenter = (View) => {
  return function WrappedComponent(props) {
    const [groups, setGroups] = useState([]);

    useEffect(() => {
      const loadGroups = async () => {
        const fetchedGroups = await fetchGroups();
        setGroups(fetchedGroups);
      };

      loadGroups();
    }, []);

    return <View {...props} groups={groups} />;
  }
};

export default GroupsPresenter;
