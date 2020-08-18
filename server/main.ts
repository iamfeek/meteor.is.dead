import { Meteor } from 'meteor/meteor';
import { LinksCollection } from '/imports/api/links';
import { SizesCollection } from '/imports/api/sizes';
import '/imports/api/outfits'

function insertLink(title: string, url: string) {
  LinksCollection.insert({ title, url, createdAt: new Date() });
}

Meteor.startup(() => {
  if (SizesCollection.find().count() === 0) {
    SizesCollection.insert({ label: "seeded", createdAt: new Date() });
  }

  // If the Links collection is empty, add some data.
  if (LinksCollection.find().count() === 0) {
    insertLink(
      'Do the Tutorial',
      'https://www.meteor.com/tutorials/react/creating-an-app'
    );

    insertLink(
      'Follow the Guide',
      'http://guide.meteor.com'
    );

    insertLink(
      'Read the Docs',
      'https://docs.meteor.com'
    );

    insertLink(
      'Discussions',
      'https://forums.meteor.com'
    );
  }
});
