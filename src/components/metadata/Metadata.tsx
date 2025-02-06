const Metadata = function () {
  return (
    <div className="metadata">
      <div className="metadata-field">
        <label htmlFor="metadata_id">Id</label>
        <input
          disabled
          name="id"
          type="text"
          id="metadata_id"
          placeholder="abc0000"
        />
      </div>
      <div className="metadata-field">
        <label htmlFor="metadata_name">Name</label>
        <input
          type="text"
          name="name"
          id="metadata_name"
          placeholder="name.ext"
        />
      </div>
      <div className="metadata-field">
        <label htmlFor="metadata_extension">Extension</label>
        <select name="extension" id="metadata_extension">
          <option value="js">JavaScript (.js)</option>
          <option value="ts">TypeScript (.ts)</option>
          <option value="py">Python (.py)</option>
        </select>
      </div>
      <div className="metadata-field">
        <label htmlFor="metadata_description">Description</label>
        <textarea name="description" id="metadata_description"></textarea>
      </div>
      <div className="metadata-field">
        <label htmlFor="metadata_created_at">Created At</label>
        <input
          disabled
          name="created_at"
          type="datetime-local"
          id="metadata_created_at"
          placeholder="yyyy-MM-dd"
        />
      </div>
    </div>
  );
};

export default Metadata;
